# Omar Rehan's Data Analysis Portfolio

A collection of data analysis, visualization, database design, and machine learning projects built using Microsoft Excel, Power BI, Tableau Public, Orange Data Mining, and MongoDB. Each project demonstrates a different area of data work, from cleaning and transforming raw datasets to building interactive dashboards and applying classification and clustering algorithms.

---

## Table of Contents

- [Portfolio Overview](#portfolio-overview)
- [Projects](#projects)
  - [1. Barcelona Datasets Visualization (Excel)](#1-barcelona-datasets-visualization-excel)
  - [2. UCL 2021-22 Players Data Visualization (Excel)](#2-ucl-2021-22-players-data-visualization-excel)
  - [3. COVID-19 USA Data Visualization (Power BI)](#3-covid-19-usa-data-visualization-power-bi)
  - [4. AdventureWorks Sample Database Visualization (Power BI)](#4-adventureworks-sample-database-visualization-power-bi)
  - [5. Drug Dataset Analysis (Orange Data Mining)](#5-drug-dataset-analysis-orange-data-mining)
  - [6. NexusBuy E-Commerce Platform (MongoDB)](#6-nexusbuy-e-commerce-platform-mongodb)
  - [7. All Work in One Presentation](#7-all-work-in-one-presentation)
- [Tools and Technologies](#tools-and-technologies)
- [Visualizations](#visualizations)
- [How to Use This Portfolio](#how-to-use-this-portfolio)
- [Contact](#contact)

---

## Portfolio Overview

This portfolio contains seven distinct projects that collectively cover the following areas:

| Area | Projects |
|------|----------|
| Data Cleaning and Transformation | Barcelona Datasets, UCL Players Data, COVID-19 USA Data |
| Data Modeling (Star Schema) | Barcelona Datasets, AdventureWorks |
| Pivot Tables and Excel Visualization | Barcelona Datasets, UCL Players Data |
| Interactive Dashboards (Power BI) | COVID-19 USA Data, AdventureWorks |
| Interactive Dashboards (Tableau Public) | Barcelona Datasets, COVID-19 USA Data, Drug Dataset, UCL Players Data, AdventureWorks |
| Supervised Learning (Classification) | Drug Dataset (Decision Tree, KNN, Naive Bayes) |
| Unsupervised Learning (Clustering) | Drug Dataset (K-Means, Hierarchical, DBSCAN) |
| NoSQL Database Design (MongoDB) | NexusBuy E-Commerce |
| UI/UX Prototyping | NexusBuy |

---

## Projects

### 1. Barcelona Datasets Visualization (Excel)

**Folder:** `Barcelona Datasets Visualization Excel/`

**Description:**
A comprehensive Excel-based analysis of 17 open datasets about the city of Barcelona, covering demographics, transportation, air quality, public safety, and more. The raw CSV data was cleaned, transformed, and loaded into a star schema data model using Power Pivot. Pivot tables and charts were then built to surface meaningful patterns and trends.

**Datasets Used (17 CSV files):**

| Dataset | Description |
|---------|-------------|
| `population.csv` | Population by district, neighborhood, gender, and year |
| `births.csv` | Birth records by district and year |
| `deaths.csv` | Death records by district and year |
| `life_expectancy.csv` | Life expectancy by neighborhood across multiple year ranges |
| `immigrants_by_nationality.csv` | Immigration data by nationality |
| `immigrants_emigrants_by_age.csv` | Immigration and emigration broken down by age group |
| `immigrants_emigrants_by_sex.csv` | Immigration and emigration broken down by sex |
| `immigrants_emigrants_by_destination.csv` | Migration flow by destination |
| `unemployment.csv` | Monthly unemployment figures by district |
| `accidents_2017.csv` | Traffic accident records for 2017 |
| `most_frequent_baby_names.csv` | Most popular baby names by gender and year |
| `most_frequent_names.csv` | Most common resident names by gender and decade |
| `bus_stops.csv` | Bus stop locations across the city |
| `transports.csv` | Public transport infrastructure data |
| `air_quality_Nov2017.csv` | Air quality measurements for November 2017 |
| `air_stations_Nov2017.csv` | Air quality monitoring station metadata |

**Data Modeling:**
A star schema was designed in Power Pivot with a central Fact Table linking to dimension tables (population, births, deaths, immigrants, unemployment, names, baby names, accidents, life expectancy). Each dimension table includes shared keys such as Year, District Name, and Neighborhood Name.

**Key Deliverables:**
- `Data Transformed.xlsx` - Cleaned and transformed data with Power Pivot model
- `Visualization and Pivot Tables.xlsx` - All pivot tables and visualizations
- `Screenshots/` - 14 screenshots including the star schema diagram and all pivot table visualizations (population trends, birth/death analysis, immigration by nationality/age/sex, unemployment trends, accident analysis, name frequency analysis)

**Skills Demonstrated:**
- Data cleaning and transformation in Excel
- Star schema data modeling with Power Pivot
- Pivot table creation and analysis
- Chart design and data storytelling

---

### 2. UCL 2021-22 Players Data Visualization (Excel)

**Folder:** `UCL 2021-22  Players Data Visualization Excel/`

**Description:**
An Excel-based analysis of UEFA Champions League 2021-22 season player statistics. The original datasets were sourced from Kaggle and contain detailed performance metrics for 747 players across all participating clubs. The data was cleaned, consolidated into a fact table, and visualized using pivot tables and charts.

**Datasets Used (8 CSV files):**

| Dataset | Records | Description |
|---------|---------|-------------|
| `key_stats.csv` | 747 players | Core stats: minutes played, matches, goals, assists, distance covered |
| `attacking.csv` | Player attacking statistics |
| `attempts.csv` | Shot attempt data |
| `defending.csv` | Defensive action statistics |
| `disciplinary.csv` | Yellow/red card records |
| `distributon.csv` | Passing and distribution metrics |
| `goalkeeping.csv` | Goalkeeper-specific statistics |
| `goals.csv` | Goal-scoring breakdown |

**Key Deliverables:**
- `FactTable.xlsx` - Consolidated fact table merging all player datasets
- `Visualizations and Pivot.xlsx` - Pivot tables and charts analyzing player performance
- `Screenshots/` - 28 screenshots of the various visualizations and analyses

**Data Highlights:**
- 747 players tracked across clubs including Real Madrid, Liverpool, Bayern Munich, Manchester City, Chelsea, Paris Saint-Germain, and more
- Top scorers: Benzema (15 goals), Lewandowski (13 goals), Haller (11 goals)
- Top assist providers: Bruno Fernandes (7 assists), Sane (6 assists), Vinicius Junior (6 assists)
- Covers all positions: Goalkeepers, Defenders, Midfielders, and Forwards

**Skills Demonstrated:**
- Multi-source data consolidation
- Fact table design from multiple related datasets
- Pivot table analysis with slicers and filters
- Sports analytics and performance comparison

---

### 3. COVID-19 USA Data Visualization (Power BI)

**Folder:** `COVID-19 USA DATA POWERBI VISUALIZATION/`

**Description:**
A Power BI dashboard analyzing COVID-19 pandemic data across all U.S. states and territories. The dataset contains daily records from the start of tracking through March 7, 2021, with 20,780 rows and 41 columns covering confirmed cases, deaths, hospitalizations, ICU usage, ventilator data, and testing metrics.

**Dataset:**
- `all-states-history.csv` - 20,780 rows, 41 columns
- Covers all 56 U.S. states and territories (50 states + DC, PR, AS, GU, MP, VI)
- Date range through March 7, 2021

**Key Metrics Tracked:**

| Category | Metrics |
|----------|---------|
| Cases | Positive cases, positive increase, positive cases viral |
| Deaths | Total deaths, confirmed deaths, probable deaths, death increase |
| Hospitalization | Currently hospitalized, cumulative hospitalized, ICU current/cumulative |
| Ventilators | Currently on ventilator, cumulative ventilator usage |
| Testing | Total tests (viral, antibody, antigen), negative tests, test results |
| Recovery | Recovered cases by state |

**Key Deliverables:**
- `7th Project.pbix` - Interactive Power BI dashboard file
- `7th Project.pptx` - Presentation summarizing findings
- `all-states-history.csv` - Source dataset

**Skills Demonstrated:**
- Power BI data import and transformation
- DAX measures and calculations
- Interactive dashboard design with filters and slicers
- Public health data analysis

---

### 4. AdventureWorks Sample Database Visualization (Power BI)

**Folder:** `Microsoft's AdventureWorks sample database POWERBI VISUALIZATION/`

**Description:**
A Power BI dashboard built on Microsoft's AdventureWorks sample database, a well-known relational database simulating a multinational bicycle manufacturing company. The dashboard analyzes sales performance across regions, product categories, and sales personnel.

**Dashboard Highlights:**
- **121K** order details records analyzed
- **31K** total orders processed
- **$2.93 billion** in total revenue (SumOfTotalDue)
- **$3 billion** in subtotal revenue (SumOfSubTotal)

**Visualizations Include:**
- Orders by region (pie chart): Australia leads with 21% of orders, followed by United Kingdom (10.23%), Germany (8.34%), and France (8%)
- Orders by Category, Subcategory, and Product Name (bar chart)
- Revenue by Territory (treemap): Southwest ($696.9M), Canada ($526.97M), Northwest ($411.21M), Central ($263.1M), Southeast ($226.43M), United Kingdom ($187.21M)
- Sales representatives directory with job titles

**Data Model Tables:**
- DProduction Product
- FactSales SalesOrderHeader
- Purchasing ShipMethod
- Sales SalesTerritory
- Sales vSalesPerson

**Key Deliverables:**
- `Power BI Assignment.pbix` - Interactive Power BI dashboard
- `Final Result.png` - Screenshot of the completed dashboard

**Skills Demonstrated:**
- Relational database analysis with Power BI
- Multi-table data modeling
- Sales performance dashboarding
- Geographic revenue analysis

---

### 5. Drug Dataset Analysis (Orange Data Mining)

**Folder:** `Drug Dataset Orange/`

**Description:**
A machine learning analysis of a drug prescription dataset using Orange Data Mining software. The project applies both supervised classification and unsupervised clustering techniques to understand the relationships between patient attributes and prescribed drugs. The dataset contains 200 patient records with 5 features and a target variable.

**Dataset:**
- `drug200.csv` - 200 records, 6 columns

| Feature | Type | Values |
|---------|------|--------|
| Age | Numeric | 15 to 74 |
| Sex | Categorical | M, F |
| BP (Blood Pressure) | Categorical | HIGH, LOW, NORMAL |
| Cholesterol | Categorical | HIGH, NORMAL |
| Na_to_K (Sodium to Potassium ratio) | Numeric | 6.269 to 38.247 |
| Drug (Target) | Categorical | DrugY, drugA, drugB, drugC, drugX |

**Classification Methods Applied:**

| Method | Description |
|--------|-------------|
| Decision Tree | Achieved 100% classification accuracy. The tree reveals that Na_to_K ratio is the most important splitting feature (threshold: 14.642). Patients with Na_to_K > 14.642 are prescribed DrugY. For lower ratios, BP and Age determine the drug assignment. |
| K-Nearest Neighbors (KNN) | Applied with k=5 neighbors using Euclidean distance. Evaluated with Test and Score widget using a 70/30 train-test split. Confusion matrix generated to assess per-class accuracy. |
| Naive Bayes | Probabilistic classifier applied with the same 70/30 split. Confusion matrix generated for comparison with KNN results. |

**Clustering Methods Applied:**

| Method | Description |
|--------|-------------|
| K-Means | Tested with k values from 2 to 8 with optimization enabled. Silhouette scores computed. Scatter plots generated showing cluster assignments colored by drug type. |
| Hierarchical Clustering | Distance matrix computed using Euclidean distance. Dendrogram generated. Selected data subsets visualized in scatter plots. |
| DBSCAN | Density-based clustering with eps=1.82 and min_samples=4. Data normalized before clustering. Results visualized with cluster and core point annotations. |
| MDS (Multidimensional Scaling) | Applied for dimensionality reduction and visualization. Used both standalone and combined with K-Means to project high-dimensional data into 2D scatter plots. |

**Orange Workflow:**
- `12th Assignment.ows` - Complete Orange Data Mining workflow file (XML-based) containing 29 connected nodes spanning data import, column selection, classification, clustering, and visualization widgets.

**Key Deliverables:**
- `12th Assignment.ows` - Orange workflow file
- `drug200.csv` - Source dataset
- `Screenshots/` - 14 screenshots covering all classification and clustering methods, including decision tree visualization, confusion matrices, test scores, scatter plots, K-Means results, hierarchical clustering dendrograms, DBSCAN visualizations, and MDS projections

**Skills Demonstrated:**
- Supervised classification (Decision Tree, KNN, Naive Bayes)
- Unsupervised clustering (K-Means, Hierarchical, DBSCAN)
- Dimensionality reduction (MDS)
- Model evaluation (confusion matrices, test and score)
- Visual workflow design in Orange

---

### 6. NexusBuy E-Commerce Platform (MongoDB)

**Folder:** `NexusBuy/`

**Description:**
A full NoSQL database design and implementation for a fictional e-commerce platform called "NexusBuy." The project covers database schema design, data modeling with entity relationships, MongoDB collection creation, CRUD operations, aggregation pipelines, and includes a UI/UX prototype and presentation.

**Database Schema (7 Collections):**

| Collection | Fields | Description |
|------------|--------|-------------|
| Customers | CustomerID, Name, Email, Password, Address, Phone, PaymentInfo, Birthdate, Age | Customer accounts with personal and payment details |
| Categories | CategoryID, Name | Product categories (Electronics, Clothing, Home Appliances, Books, Toys) |
| Products | ProductID, Name, Description, Price, Quantity, Category (embedded) | Product catalog with embedded category references |
| Orders | OrderID, OrderDate, TotalAmount, ShippingAddress, PaymentStatus, Customer (embedded) | Order records with embedded customer info |
| OrderItems | OrderItemID, Quantity, UnitPrice, Order (embedded), Product (embedded) | Line items linking orders to products |
| CartItems | CartItemID, Quantity, Customer (embedded), Product (embedded) | Shopping cart contents |
| Reviews | ReviewID, Rating, Comment, ReviewDate, Customer (embedded), Product (embedded) | Customer product reviews |

**MongoDB Operations Demonstrated:**

| Operation Type | Examples |
|---------------|----------|
| Create | insertOne, insertMany for all collections |
| Read | find, find with filters (PaymentStatus, date ranges) |
| Update | updateOne, updateMany with $set, $inc, $mul, $unset operators |
| Delete | deleteOne, deleteMany with filters and $in operator |
| Aggregation | $group, $sum, $avg, $sort, $limit for revenue analysis, order statistics, and customer summaries |
| Schema Evolution | Adding/removing fields (Birthdate, Age) using $addFields and $unset |

**Data Modeling:**
- Hybrid approach using both embedding and referencing
- Category information embedded within Products for read performance
- Customer summary embedded within Orders and Reviews for denormalization
- Full product details embedded within OrderItems and CartItems

**Additional Deliverables:**
- `NexusBuy.js` - Complete MongoDB shell script (899 lines) with all CRUD operations and aggregations
- `NexusBuy DB/` - 7 JSON files containing sample data for all collections
- `Modeling/` - Data model diagrams (PDF and Visio formats) showing entity relationships
- `Logos/` - 6 brand logo variations (color, black, white, transparent backgrounds)
- `NexusBuy Prototype/NexusBuy/` - 9 UI/UX prototype screens (Start App, Home, Create Account, Product, Product Stats, Cart Items, Reviews, User Profile)
- `Presentation/` - Project presentation (PPTX and PDF formats)
- `Screen Shots/` - 69 screenshots documenting every step of the development process

**Skills Demonstrated:**
- NoSQL database design and data modeling
- MongoDB CRUD operations and aggregation framework
- Document embedding vs. referencing strategies
- E-commerce domain modeling
- UI/UX prototyping
- Project documentation and presentation

---

### 7. All Work in One Presentation

**Folder:** `ALL WORK IN JUST ONE PRESENTAION/`

**Description:**
A comprehensive PowerPoint presentation that consolidates and summarizes all the projects in this portfolio into a single document. This serves as a quick overview of the entire body of work.

**Key Deliverable:**
- `Final Presentation.pptx` - Consolidated presentation (~30 MB)

---

## Tools and Technologies

| Tool | Usage |
|------|-------|
| <img src="https://img.shields.io/badge/Microsoft_Excel-217346?style=flat&logo=microsoft-excel&logoColor=white" height="22" /> **Microsoft Excel** | Data cleaning, transformation, Power Pivot data modeling, pivot tables, chart visualizations |
| <img src="https://img.shields.io/badge/Power_BI-F2C811?style=flat&logo=powerbi&logoColor=black" height="22" /> **Microsoft Power BI** | Interactive dashboards, DAX calculations, data modeling, geographic analysis |
| <img src="https://img.shields.io/badge/Tableau-E97627?style=flat&logo=tableau&logoColor=white" height="22" /> **Tableau Public** | Interactive dashboards, star schema visualization, calculated fields, geographic maps, trend analysis |
| <img src="https://img.shields.io/badge/Orange_Data_Mining-F5A623?style=flat&logo=orange&logoColor=white" height="22" /> **Orange Data Mining** | Visual machine learning workflows, classification, clustering, dimensionality reduction |
| <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" height="22" /> **MongoDB** | NoSQL database design, shell scripting, CRUD operations, aggregation pipelines |
| <img src="https://img.shields.io/badge/Microsoft_Visio-3955A3?style=flat&logo=microsoft-visio&logoColor=white" height="22" /> **Microsoft Visio** | Database entity-relationship diagrams |
| <img src="https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=flat&logo=microsoft-powerpoint&logoColor=white" height="22" /> **Microsoft PowerPoint** | Project presentations and documentation |
| <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" height="22" /> **Python** | Data cleaning, transformation, and validation scripts |

---

## Visualizations

A complete gallery of all visualizations, dashboards, and analysis outputs across every project in this portfolio.

### Barcelona Datasets — Excel Pivot Tables & Star Schema

| | |
|---|---|
| ![Accidents Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Accidents%20Pivot.png) | ![Births Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Births%20Pivot.png) |
| **Accidents Pivot Table** | **Births Pivot Table** |
| ![Death Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Death%20Pivot.png) | ![Immigrants by Nationality Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Immigrants%20by%20Nationality%20Pivot.png) |
| **Deaths Pivot Table** | **Immigrants by Nationality Pivot** |
| ![Immigrants Emigrants by Age 1](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Immigrants%20Emigrants%20by%20Age%201.png) | ![Immigrants Emigrants by Age 2](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Immigrants%20Emigrants%20by%20Age%202.png) |
| **Immigrants & Emigrants by Age (1)** | **Immigrants & Emigrants by Age (2)** |
| ![Immigrants Emigrants by Sex 1](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Immigrants%20Emigrants%20by%20Sex%201.png) | ![Immigrants Emigrants by Sex 2](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Immigrants%20Emigrants%20by%20Sex%202.png) |
| **Immigrants & Emigrants by Sex (1)** | **Immigrants & Emigrants by Sex (2)** |
| ![Most Frequent Baby Names Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Most%20Frequent%20Baby%20Names%20Pivot.png) | ![Most Frequent Names Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Most%20Frequent%20Names%20Pivot.png) |
| **Most Frequent Baby Names Pivot** | **Most Frequent Names Pivot** |
| ![Population Pivot 1](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Population%20Pivot%201.png) | ![Population Pivot 2](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Population%20Pivot%202.png) |
| **Population Pivot (1)** | **Population Pivot (2)** |
| ![Unemployment Pivot](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Unemployment%20Pivot.png) | ![Star Schema](Visualizations/Barcelona%20Datasets%20Visualization%20Excel/Star%20Schema.png) |
| **Unemployment Pivot Table** | **Star Schema Data Model** |

---

### COVID-19 USA Data — Power BI Dashboard

| | |
|---|---|
| ![Overall Total](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Overall%20Total.png) | ![Positive](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Positive.png) |
| **Overall Summary Totals** | **Positive Cases by State** |
| ![Death](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Death.png) | ![Hospitalized](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Hospitalized.png) |
| **Death Analysis** | **Hospitalization Trends** |
| ![Negative Increase](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Negative%20Increase.png) | ![Recovered](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Recovered.png) |
| **Negative Test Increase** | **Recovery Data** |
| ![Ventilator and ICU](Visualizations/COVID-19%20USA%20DATA%20POWERBI%20VISUALIZATION/Ventilator%20and%20ICU.png) | |
| **Ventilator & ICU Usage** | |

---

### Drug Dataset — Orange Data Mining (Classification & Clustering)

| | |
|---|---|
| ![Classification Methods](Visualizations/Drug%20Dataset%20Orange/Classification%20Methods.png) | ![Clusters Methods](Visualizations/Drug%20Dataset%20Orange/Clusters%20Methods.png) |
| **Classification Methods Overview** | **Clustering Methods Overview** |
| ![Decision Tree](Visualizations/Drug%20Dataset%20Orange/Decision%20Tree.png) | ![KNN Test and Score](Visualizations/Drug%20Dataset%20Orange/KNN%20Test%20and%20Score.png) |
| **Decision Tree Visualization** | **KNN Test and Score Results** |
| ![KNN Confusion Matrix](Visualizations/Drug%20Dataset%20Orange/KNN%20Confusion%20Matrix.png) | ![Naive Bayes Test and Score](Visualizations/Drug%20Dataset%20Orange/Naive%20Bayes%20Test%20and%20Score.png) |
| **KNN Confusion Matrix** | **Naive Bayes Test and Score** |
| ![Naive Bayes Confusion Matrix](Visualizations/Drug%20Dataset%20Orange/Naive%20Bayes%20Confusion%20Matrix.png) | ![K-Means](Visualizations/Drug%20Dataset%20Orange/K-Means.png) |
| **Naive Bayes Confusion Matrix** | **K-Means Clustering** |
| ![Hierarchical Clustering](Visualizations/Drug%20Dataset%20Orange/Hierarchical%20Clustering.png) | ![Hierarchical Clustering When data Selected](Visualizations/Drug%20Dataset%20Orange/Hierarchical%20Clustering%20When%20data%20Selected.png) |
| **Hierarchical Clustering** | **Hierarchical Clustering (Data Selected)** |
| ![DBSCAN](Visualizations/Drug%20Dataset%20Orange/DBSCAN.png) | ![DBSCAN Visualization](Visualizations/Drug%20Dataset%20Orange/DBSCAN%20Visualization.png) |
| **DBSCAN Clustering** | **DBSCAN Visualization** |
| ![MDS](Visualizations/Drug%20Dataset%20Orange/MDS.png) | ![MDS applied K-Means](Visualizations/Drug%20Dataset%20Orange/MDS%20applied%20K-Means.png) |
| **MDS (Multidimensional Scaling)** | **MDS with K-Means Applied** |

---

### AdventureWorks — Power BI Dashboard

| |
|---|
| ![AdventureWorks Dashboard](Visualizations/Microsoft's%20AdventureWorks%20sample%20database%20POWERBI%20VISUALIZATION/Microsoft's%20AdventureWorks%20sample%20database%20POWERBI%20VISUALIZATION.png) |
| **AdventureWorks Sales Dashboard — Orders by Region, Revenue by Territory, Sales Reps** |

---

### NexusBuy — UI/UX Prototype Screens

| | |
|---|---|
| ![Start App](Visualizations/NexusBuy%20Prototype/NexusBuy-Start%20App.png) | ![Home](Visualizations/NexusBuy%20Prototype/NexusBuy-Home.png) |
| **Start App Screen** | **Home Screen** |
| ![Create Account](Visualizations/NexusBuy%20Prototype/NexusBuy-Create%20Account.png) | ![Product](Visualizations/NexusBuy%20Prototype/NexusBuy-Product.png) |
| **Create Account Screen** | **Product Screen** |
| ![Product Stats](Visualizations/NexusBuy%20Prototype/NexusBuy-Product%20Stats.png) | ![Product Stats 2](Visualizations/NexusBuy%20Prototype/NexusBuy-Product%20Stats%202.png) |
| **Product Stats (1)** | **Product Stats (2)** |
| ![Cart Items](Visualizations/NexusBuy%20Prototype/NexusBuy-Cart%20Items.png) | ![Reviews](Visualizations/NexusBuy%20Prototype/NexusBuy-Reviews.png) |
| **Cart Items Screen** | **Reviews Screen** |
| ![User Profile](Visualizations/NexusBuy%20Prototype/NexusBuy-User%20Profile.png) | |
| **User Profile Screen** | |

---

### Tableau Public Dashboards

| |
|---|
| ![Barcelona City Insights Dashboard](Visualizations/Tableau%20Public%20Visualiztions/Barcelona%20City%20Insights%20Dashboard.png) |
| **Barcelona City Insights Dashboard** |
| ![United States COVID-19 Data 2020-2021](Visualizations/Tableau%20Public%20Visualiztions/United%20States%20COVID-19%20Data%202020-2021.png) |
| **United States COVID-19 Data Dashboard (2020–2021)** |
| ![UEFA Champions League 2021-2022 Player Analytics](Visualizations/Tableau%20Public%20Visualiztions/UEFA%20Champions%20League%202021-2022%20Player%20Analytics.png) |
| **UEFA Champions League 2021–22 Player Analytics Dashboard** |

---

### UCL 2021-22 Players Data — Excel Visualizations

| | |
|---|---|
| ![UCL Visualization 1](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/1.png) | ![UCL Visualization 2](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/2.png) |
| **Player Overview & Key Stats** | **Top Scorers Analysis** |
| ![UCL Visualization 3](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/3.png) | ![UCL Visualization 4](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/4.png) |
| **Goal Distribution by Club** | **Assists Leaderboard** |
| ![UCL Visualization 5](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/5.png) | ![UCL Visualization 6](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/6.png) |
| **Attacking Stats Pivot** | **Shooting Attempts Analysis** |
| ![UCL Visualization 7](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/7.png) | ![UCL Visualization 8](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/8.png) |
| **Defending Stats Pivot** | **Tackles & Ball Recovery** |
| ![UCL Visualization 9](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/9.png) | ![UCL Visualization 10](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/10.png) |
| **Disciplinary Records** | **Yellow & Red Cards** |
| ![UCL Visualization 11](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/11.png) | ![UCL Visualization 12](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/12.png) |
| **Distribution & Passing** | **Pass Completion Rates** |
| ![UCL Visualization 13](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/13.png) | ![UCL Visualization 14](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/14.png) |
| **Goalkeeper Saves** | **Clean Sheets Analysis** |
| ![UCL Visualization 15](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/15.png) | ![UCL Visualization 16](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/16.png) |
| **Goals by Type (Foot/Head)** | **Penalty Conversion** |
| ![UCL Visualization 17](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/17.png) | ![UCL Visualization 18](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/18.png) |
| **Dribbles & Offsides** | **Crosses & Corners** |
| ![UCL Visualization 19](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/19.png) | ![UCL Visualization 20](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/20.png) |
| **Distance Covered Stats** | **Minutes Played** |
| ![UCL Visualization 21](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/21.png) | ![UCL Visualization 22](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/22.png) |
| **Club Performance Summary** | **Position Breakdown** |
| ![UCL Visualization 23](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/23.png) | ![UCL Visualization 24](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/24.png) |
| **Forwards Comparison** | **Midfielders Comparison** |
| ![UCL Visualization 25](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/25.png) | ![UCL Visualization 26](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/26.png) |
| **Defenders Comparison** | **Goalkeeper Performance** |
| ![UCL Visualization 27](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/27.png) | ![UCL Visualization 28](Visualizations/UCL%202021-22%20%20Players%20Data%20Visualization%20Excel/28.png) |
| **Overall Player Rankings** | **Final Summary Dashboard** |

---

## How to Use This Portfolio

1. **Excel Projects** (Barcelona, UCL): Open the `.xlsx` files in Microsoft Excel. The Power Pivot data model can be viewed through the Power Pivot tab. Pivot tables and charts are on separate sheets.

2. **Power BI Projects** (COVID-19, AdventureWorks): Open the `.pbix` files in Microsoft Power BI Desktop (free download from Microsoft). The dashboards are fully interactive with slicers and filters.

3. **Orange Project** (Drug Dataset): Open the `.ows` file in Orange Data Mining (free, open-source software available at orange.biolab.si). Ensure the `drug200.csv` file is accessible at the path configured in the workflow, or update the CSV File Import widget to point to the local copy.

4. **MongoDB Project** (NexusBuy): The `NexusBuy.js` file contains MongoDB shell commands. Run them in the MongoDB Shell (mongosh) after starting a MongoDB instance. The JSON files in `NexusBuy DB/` contain the sample data.

5. **Screenshots**: Each project folder contains a `Screenshots/` or `Screen Shots/` directory with visual documentation of the outputs and results.

---

## Contact & Links

You can reach me through the following channels:

* Phone: +971 50 966 9311
* Email: [ai.omar.rehan@gmail.com](mailto:ai.omar.rehan@gmail.com)
* You can view my portfolio website here: [Portfolio Website](https://omar-rehan.vercel.app/?utm_source=chatgpt.com)
* My GitHub profile is available here: [GitHub Profile](https://github.com/AIOmarRehan?utm_source=chatgpt.com)
* Connect with me on LinkedIn here: [LinkedIn Profile](https://linkedin.com/in/omar-rehan-47b98636a?utm_source=chatgpt.com)
* Explore my Tableau dashboards here: [Tableau Public](https://public.tableau.com/app/profile/omar.rehan?utm_source=chatgpt.com)
* Check my Kaggle profile here: [Kaggle Profile](https://kaggle.com/aiomarrehan?utm_source=chatgpt.com)
* Visit my Hugging Face profile here: [Hugging Face](https://huggingface.co/AIOmarRehan?utm_source=chatgpt.com)
* Read my articles on Medium here: [Medium Profile](https://medium.com/@ai.omar.rehan?utm_source=chatgpt.com)
