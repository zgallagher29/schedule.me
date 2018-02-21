
# coding: utf-8

# In[21]:

import pandas as pd


# In[22]:

dfCrime = pd.read_json("https://data.cityofchicago.org/resource/crimes.json")
dfLibrary = pd.read_json("https://data.cityofchicago.org/resource/psqp-6rmg.json")
dfEarlyLearningPrograms = pd.read_json("https://data.cityofchicago.org/resource/inr8-nr2v.json")
dfSchoolProfile = pd.read_json("https://data.cityofchicago.org/resource/76dk-7ieb.json")
dfSchoolReportCard = pd.read_json("https://data.cityofchicago.org/resource/iqnd-nmue.json")
dfLStops = pd.read_json("https://data.cityofchicago.org/resource/8mj8-j3c4.json")
dfVacantBuildings = pd.read_json("https://data.cityofchicago.org/resource/yama-9had.json")
##broken: dfLifeExpectancy = pd.read_json("	https://data.cityofchicago.org/api/views/qjr3-bm53")


# In[23]:

dfCrime.head(5)


# In[24]:

dfLibrary.head(5)


# In[ ]:




# In[ ]:



