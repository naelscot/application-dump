import unittest
from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
from features.pages.quote_home import QuoteHomePage


def before_all(context):
    #place your own webdriver from your computer here
    driver: WebDriver = webdriver.Chrome('C:/Users/Mysti/Desktop/Revature/ChromeDriver/chromedriver.exe')

    profile_home_page = ProfileHomePage(driver)
    welcome_home = WelcomePage(driver)

    test = unittest.TestCase()

    context.driver = driver
    context.profile_home = profile_home_page
    context.welcome_home = welcome_home
    context.bank_home = bank_home_page
    context.unittest = test
    print("started")


def after_all(context):
    context.driver.quit()
    print("ended")
