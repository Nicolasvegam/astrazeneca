import requests
import time
import csv
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import pandas as pd
#Search: Post of Key Account Manager, Pharmaceutical Industry, Last Month

class Linkedin:

    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.driver = webdriver.Chrome()


    def login(self):

        print('***LOGIN***\n')

        self.driver.get('https://www.linkedin.com')
        username = self.driver.find_element_by_id('session_key')
        username.send_keys(self.username)
        sleep(4)

        password = self.driver.find_element_by_id('session_password')
        password.send_keys(self.password)
        sleep(4)

        sign_in_button = self.driver.find_element_by_xpath('//*[@type="submit"]')
        sign_in_button.click()


    def get_jobs_id(self, page):

        print('***GET JOBS***\n')

        ids = []

        if page == 0:
            p = ''

        else:
            n = 25*page
            p = '&start={0}'.format(n)

        raw_page = 'https://www.linkedin.com/jobs/search/?currentJobId=2203585278&f_I=15&f_TPR=r2592000&geoId=92000000&keywords=Key%20Account%20Manager&location=Nel%20mondo{0}'.format(p)

        self.driver.get(raw_page);

        python_button = self.driver.find_elements_by_xpath("//div[@class='jobs-search-results']")[0]
        python_button.click()

        html = self.driver.find_element_by_tag_name('html')

        for i in range(0,7):
            html.send_keys(Keys.PAGE_DOWN)
            sleep(5)

        search_box = self.driver.find_elements_by_class_name("job-card-container")

        for card in search_box:
            id = card.get_attribute('data-job-id')
            ids.append(id)

        sleep(2)

        print('JOBS: ' + str(ids) + '\n')

        return ids


    def generated_link(self, id, page):

        if page == 0:
            p = ''

        else:
            n = 25*page
            p = '&start={0}'.format(n)

        raw = 'https://www.linkedin.com/jobs/search/?currentJobId={0}&f_I=15&f_TPR=r2592000&geoId=92000000&keywords=Key%20Account%20Manager&location=Nel%20mondo{1}'.format(id,p)
        job = raw.replace('{id}',id)
        return job

    def get_jobs_info(self, ids, page):

        print('***GET INFO***\n')

        text = ''
        for id in ids:
            link = self.generated_link(id, page)
            self.driver.get(link);
            print('Saving job:{} - page: {}\n'.format(id, page))
            sleep(25)
            try:
                search_box = self.driver.find_element_by_class_name("jobs-box__html-content")
                text += search_box.text
            except Exception:
                print('Error {}'.format(id))


        self.driver.quit()

        file = 'page{0}.txt'.format(page)

        with open(file, 'a') as f:
            f.write(text)

    def iterate_all(self, n_page):

        self.login()
        ids = self.get_jobs_id(n_page)
        self.get_jobs_info(ids, n_page)


def without_authenthication():

    #Open Driver + Define a specific link, i.e. search
    raw_page = 'https://www.linkedin.com/jobs/search/?currentJobId=2180215659&f_I=15&f_TPR=r2592000&geoId=92000000&keywords=Key%20Account%20Manager&location=Nel%20mondo%7B0%7D&position=17&pageNum=7'
    driver = webdriver.Chrome()
    driver.get(raw_page);

    #Goes to search
    print('[STATUS] home page'.format(id))
    text = ''
    file = 'data.txt'
    python_button = driver.find_elements_by_xpath("//ul[@class='jobs-search__results-list']")[0]
    python_button.click()
    html = driver.find_element_by_tag_name('html')

    #Scroll down to get all offers
    for i in range(0,7):
        html.send_keys(Keys.PAGE_DOWN)
        sleep(5)

    search_box = driver.find_elements_by_class_name("result-card")
    sleep(2) #Necessary to avoid blocking

    ids = []

    #Get all ids of offers
    for card in search_box:
        id = card.get_attribute('data-id')
        ids.append(id)

    #For each id gets text

    for id in ids:

        try:
            print('[STATUS] getting id {}'.format(id))
            sleep(5)
            page = 'https://www.linkedin.com/jobs/search/?currentJobId={0}&f_I=15&f_TPR=r2592000&geoId=92000000&keywords=Key%20Account%20Manager&location=Nel%20mondo%7B0%7D&position=17&pageNum=7'.format(id)
            driver.get(page);

            print('[STATUS] see anouncement')
            sleep(5)
            python_button = driver.find_elements_by_xpath("//button[@class='show-more-less-html__button show-more-less-html__button--more']")[0]
            python_button.click()

            print('[STATUS] click see more')
            raw_text = driver.find_element_by_class_name("show-more-less-html__markup")
            text += raw_text.text

            print('[STATUS] saving job')
            sleep(5)
        except Exception:
            with open(file, 'a') as f:
                f.write(text)

    with open(file, 'a') as f:
        f.write(text)

def scrapping(country, output):

    geoid = {'Argentina': 100446943, 'Chile': 104621616, 'Uruguay': 100867946}

    #Filters: Country, No Role, Pharmaceutical Industry, Any Time
    home_page = 'https://www.linkedin.com/jobs/search/?f_I=15&geoId={1}&location={0}'.format(country, geoid[country])


    driver = webdriver.Chrome()
    driver.get(home_page);

    #Goes to search
    print('[STATUS] home page')
    text = ''

    python_button = driver.find_elements_by_xpath("//ul[@class='jobs-search__results-list']")[0]
    python_button.click()
    html = driver.find_element_by_tag_name('html')

    #Scroll down to get all offers
    for i in range(0,7):
        html.send_keys(Keys.PAGE_DOWN)
        sleep(5)

    search_box = driver.find_elements_by_class_name("result-card")
    sleep(2) #Necessary to avoid blocking

    ids = []

    #Get all ids of offers
    for card in search_box:
        id = card.get_attribute('data-id')
        ids.append(id)



    all = {'Id': [], 'Titulo': [], 'Compañia': [], 'Lugar': [], 'Fecha':[], 'Nivel de antigüedad':[], 'Tipo de empleo': [],'Función laboral':[], 'Sectores': [], 'Contenido': []}



    #For each id gets text

    for id in ids:

        try:
            print('[STATUS] getting id {}'.format(id))
            sleep(5)
            page = 'https://www.linkedin.com/jobs/search/?f_I=15&geoId=104621616&location={0}&currentJobId={1}'.format(country, id)
            driver.get(page);

            print('[STATUS] see anouncement')
            sleep(5)

            python_button = driver.find_elements_by_xpath("//button[@class='show-more-less-html__button show-more-less-html__button--more']")[0]

            if not python_button:
                continue

            python_button.click()
            all['Id'].append(id)
            print('[STATUS] click see more')
            raw_text = driver.find_element_by_class_name("show-more-less-html__markup")

            title = driver.find_elements_by_class_name("topcard__title")[0].text
            company = driver.find_elements_by_class_name("topcard__org-name-link")

            if company:
                all['Compañia'].append(company[0].text)
            else:
                all['Compañia'].append(None)

            place = driver.find_elements_by_xpath("//span[@class='topcard__flavor topcard__flavor--bullet']")[0].text
            date = driver.find_elements_by_class_name("topcard__flavor--metadata")[0].text


            all['Titulo'].append(title)
            all['Lugar'].append(place)
            all['Fecha'].append(date)
            all['Contenido'].append(raw_text.text)

            criterias = driver.find_elements_by_class_name("job-criteria__item")

            for criteria in criterias:

                row_content = criteria.find_element_by_class_name("job-criteria__subheader")
                contents = criteria.find_elements_by_class_name("job-criteria__text")
                string_content = ''

                for content in contents:
                    string_content += ' ' + content.text

                all[row_content.text].append(string_content)

            print('[STATUS] saving job')
            sleep(5)



        except Exception:

            df = pd.DataFrame(all, columns= ['Id', 'Titulo', 'Compañia', 'Lugar', 'Fecha',
            'Nivel de antigüedad', 'Tipo de empleo', 'Función laboral',
            'Sectores', 'Contenido'])

            df.to_csv(output, sep='\t', encoding='utf-8')
            #with open(output, 'a') as f:
        #        f.write(text)

    df = pd.DataFrame(all, columns= ['Id', 'Titulo', 'Compañia', 'Lugar', 'Fecha',
    'Nivel de antigüedad', 'Tipo de empleo', 'Función laboral',
    'Sectores', 'Contenido'])
    df.to_csv(output, sep='\t', encoding='utf-8')
    #with open(output, 'a') as f:
    #    f.write(text)

#scrapping('Chile','chile.csv')
scrapping('Argentina','argentina.csv')
#scrapping('Uruguay','uruguay.csv')

#for i in range(0,5):
#    lp = Linkedin('poner mail','poner password')
#    lp.iterate_all(i)
#    sleep(25)
#without_authenthication()
