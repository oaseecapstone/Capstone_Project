# Machine Learning - OASEE - Fake News Detector App
## Capstone Project Bangkit 2023

Capstone Team ID : C23 - PS110 <br>
Here is our repository for Bangkit 2022 Capstone project - Machine Learning.

## MACHINE LEARNING SCHEDULE
| WBS  | Task                                                  | Start Date | End Date   | Duration (days) |
| :-:  | ----------------------------------------------------- | :--------: | :--------: | :-------------: |
| 2.1  | Collecting Available Datasets or Generating Dummy Datasets |   15 May   |   18 May   |        4        |
| 2.2  | Defining Features Required and Collecting/Generating Datasets |   16 May   |   18 May   |        3        |
| 2.3  | Building, Cleaning, Refining Datasets              |   17 May   |   22 May   |        4        |
| 2.4  | Determining and Researching about NLP Techniques   |   17 May   |   22 May   |        4        |
| 2.5  | Implementing NLP Technique, Architecture, and Algorithms |   18 May   |   26 May   |        7        |
| 2.6  | Model Training                                    |   22 May   |   26 May   |        5        |
| 2.7  | Model Evaluation                                  |   24 May   |   26 May   |        3        |
| 2.8  | Model Deployment                                  |   25 May   |   26 May   |        2        |
| 2.9  | Adding more Datasets                              |   19 May   |   26 May   |        6        |
| 2.10 | Model Improvement                                |   26 May   |  09 June   |       12        |

[Project Schedule "OASEE : Fake News Detector" [C23-PSS110]](https://docs.google.com/spreadsheets/d/18yY8Lj9lcF2pc_yETkXEsqmvu8s3BaSf5pGjb2TOfEY/edit?usp=sharing)

## DESCRIPTION
There 3 Machine Learning model:
- [Fake News Detection](https://github.com/oaseecapstone/Capstone_Project/tree/machine_learning/ML/Hoax%20Detection)
- [Text Summarization](https://github.com/oaseecapstone/Capstone_Project/tree/machine_learning/ML/Text%20Summarize)
- [Sentiment Analysis](https://github.com/oaseecapstone/Capstone_Project/tree/machine_learning/ML/Sentiment%20Analysis)

We utilize advanced machine learning techniques, including Convolutional Neural Networks (CNN) for fake news filtering, K-means clustering for sentiment analysis, and algorithms for text summarization based on sentence similarity. The CNN model effectively identifies and filters fake news, ensuring users receive reliable information. K-means clustering analyzes sentiment in news articles, providing users with a broader perspective. Our text summarization algorithm condenses articles by prioritizing important information, allowing users to grasp key points efficiently.

## TOOLS
- Python
- TensorFlow
- scikit-learn
- NLTK
- Transformers 
- NumPy
- Pandas
- Seaborn
- Matplotlib
- Google Colab

## DATASETS
We get the dataset from 4 website (detik.com, nasional.kompas.com, cnnindonesia.com, turnbackhoax.id)

- [Dataset 1](https://github.com/oaseecapstone/Capstone_Project/blob/machine_learning/ML/Dataset/dataset_hoax_or_fact_feature.csv)
- [Dataset 2](https://github.com/oaseecapstone/Capstone_Project/blob/machine_learning/ML/Dataset/dataset_summarize_text_feature.csv)
- [Dataset 3](https://github.com/oaseecapstone/Capstone_Project/blob/machine_learning/ML/Dataset/dataset_sentiment_analysis_feature.csv)

## DEPLOYMENT 
We will use TensorFlow Lite to deploy a trained Machine Learning model on Android.
