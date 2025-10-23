---
title: "DuckDB: The Hidden Gem Powering the New Era of Local Data Analytics"
github: ["https://github.com/hydraharish123", "https://github.com/anushree200"]
summary: "A practical introduction to DuckDB, the \"SQLite for analytics\""
date: "2025-10-17"
draft: false
tags:
- API
- DevTools
---

# DuckDB: The Hidden Gem Powering the New Era of Local Data Analytics

## Introduction

If you’ve ever worked with data, you’ve likely used tools like pandas for quick analysis or databases like PostgreSQL/MySQL for **storing** and **querying larger datasets**. Both are powerful — but there’s always been an awkward middle ground between them.

Pandas is easy and intuitive but struggles when your dataset grows beyond memory. Databases, on the other hand, are robust but often come with the burden of setup, configuration, and maintenance.

Enter DuckDB — the perfect bridge between the two.

Think of it as **“SQLite for analytics”**: a **lightweight**, **in-process analytical database** that runs right inside your Python, R, or C++ code. No servers, no configs, no connection strings.

— just import it and start querying instantly

## Why is everyone talking about DuckDB ?

Data work has changed. Analysts and developers today handle millions of rows locally — often inside Jupyter notebooks or simple scripts. Setting up something like Spark for that kind of “medium-sized” data is overkill.

That’s where DuckDB shines. DuckDB is fast and lightweight, easy to use, portable across different systems and it is powerful enough to crunch through analytical workloads that once required massive data engines.

In short, DuckDB brings database-level performance to your laptop. You can analyze CSVs, Parquet files, or pandas DataFrames using pure SQL — without leaving your local environment. That sweet spot between convenience and capability is exactly why DuckDB is quickly becoming a favorite in the modern data stack.

## DuckDB vs. Traditional Databases
When we hear “database,” we usually picture systems like **PostgreSQL**, **MySQL**, or **MongoDB** — the kind that run on servers and handle multiple users and transactions at once.

These are client–server databases, ideal for **transactional work (OLTP)** — things like recording orders, managing users, or updating records in real time.

**DuckDB**, however, plays a different game. It’s built for **analytical workloads (OLAP)** — the kind where you run complex queries, aggregations, and summaries over large datasets.

And since it’s in-process, DuckDB doesn’t need a separate server. It runs inside your program, just like NumPy or pandas — making it seamless to integrate into your existing workflows.

## Why DuckDB Is So Fast ?
DuckDB’s performance isn’t magic — it’s smart engineering. Here’s how it achieves lightning-fast analytics:

**Columnar storage** — Data is stored column-by-column, not row-by-row, which makes aggregate operations like SUM(), AVG(), or filtering super efficient.

**Vectorized execution** — It processes data in batches (vectors), making full use of modern CPU caches for speed.

**Parallel processing** — DuckDB automatically distributes work across multiple CPU cores.

**Query files directly** — You can query data from CSV or Parquet files without even importing them first.

While databases like Postgres are optimized for handling many small transactions, DuckDB is optimized for big analytical queries — scanning millions of rows and summarizing them in seconds.

## Installation: As Easy As It Gets
One of DuckDB’s biggest superpowers is zero setup. No servers. No daemons. No configuration files. Just install and go.


**In python**:

```python
    pip install duckdb
```

**In R**:
```R
    install.packages("duckdb")
```

That’s it. You’re ready to start querying data instantly.

## Getting started with SQL
DuckDB follows standard SQL syntax with a few analytical extensions.

#### Creating Tables in SQL

```sql
    CREATE TABLE students (id INTEGER, name TEXT, score FLOAT);
```

#### Inserting values into the table
```sql
    INSERT INTO students VALUES (1, 'Alice', 89.5);
```

#### Query data from tables
```sql
    SELECT * FROM students;
```

```sql
    SELECT * FROM table WHERE score > 80;
```
#### Ordering data
```sql
    SELECT * FROM students ORDER BY score DESC;
```

#### Aggregating data

```sql
    SELECT AVG(score), COUNT(*) FROM students;
```

#### Importing CSV File

```sql
    CREATE TABLE t AS SELECT * FROM read_csv_auto('sample_file.csv');
```

#### Exporting as CSV File

```sql
    COPY (SELECT * FROM table) TO 'output_file.csv' (HEADER, DELIMITER ',');
```

With these fundamentals, you have everything you need to start working with SQL and you can immediately begin using DuckDB.


## How to use DuckDB ?
Lets first start with the basic commands to get started with DuckDB. Its important to note that a good understand of pandas library is required.

```python
    import duckdb

    # Create an in-memory database (default). This means the data is stored in RAM in this situation
    con = duckdb.connect()

    # Run an SQL command directly in python
    # This create a table called "students" and makes an entry to the table
    con.execute("CREATE TABLE students AS SELECT 1 AS id, 'Alice' AS name, 90 AS score;")

    # This line will extract all the data currently in the "students" table
    result = con.execute("SELECT * FROM students").fetchall()

    print(result)
    # [(1, 'Alice', 90)]
```

You can also connect to a persistent / existing database file

```python
    con = duckdb.connect('mydatabase.duckdb')
```

One of DuckDB’s main features is that you can query pandas dataframes directly using SQL without writing them to the disk. Let us see how that’s done.

```python
    import duckdb
    import pandas as pd

    df = pd.DataFrame({
        'id': [1, 2, 3],
        'name': ['Alice', 'Bob', 'Charlie'],
        'score': [90, 85, 92]
    })

    result = duckdb.query("SELECT name, score FROM df WHERE score > 85").to_df()
    print(result)
```

It creates a pandas DataFrame in Python, then uses DuckDB to run a SQL query on that DataFrame treating it like a database table. Finally, it returns the query result back as another DataFrame.

#### Why is this such an important feature ?
Normally to run SQL on data in pandas, you’d have to write the data to a database like MySQL / PostgreSQL. With DuckDB, we don’t move or copy any such data, it reads directly from the pandas dataframe in memory.

You can also query multiple dataframes using DuckDB

```python
    students = pd.DataFrame({'id': [1, 2, 3], 'name': ['Alice', 'Bob', 'Charlie']})

    scores = pd.DataFrame({'id': [1, 2, 3], 'score': [90, 85, 92]})

    result = duckdb.query("""
        SELECT s.name, sc.score
        FROM students s
        JOIN scores sc ON s.id = sc.id
    """).to_df()

    print(result)
```

You can also explicitly register a pandas dataframe as a named table for repeated or complex queries and it will actually read from the pandas dataframe in memory without any copying or conversion.

```python
    # create a duckdb connection object
    con = duckdb.connect()

    # register "df" as "students" inside duckdb. Now df available inside duckdb with the name "students"
    con.register('students', df)

    # queries the students table and converts the result of the SQL query to a dataframe
    result = con.execute("SELECT * FROM students WHERE score > 85").df()
```
Finally we come to exporting the table to CSV / Pandas / Parquet

```python
    # To pandas
    df_out = con.execute("SELECT * FROM students").df()

    # To Parquet
    con.execute("COPY students TO 'students.parquet' (FORMAT 'parquet');")

    # To CSV
    con.execute("COPY students TO 'students.csv' (HEADER, DELIMITER ',');")
```

## Real world use cases
DuckDB is widely used in real-world scenarios where fast, in-process analytics is needed. It has the ability to query large CSV or Parquet files directly, integrate seamlessly with pandas, and perform complex SQL operations.

####  Here are some use cases:

- Suppose you have multiple CSV files be it from any domain and you would want fast data aggregation, joins or filtering.
- Creating features from large datasets before feeding to ML models.
- Analyze large biological datasets like gene expression.



## References

- *[DuckDB Documentation](https://duckdb.org/docs/stable/guides/overview)*
- *[Why to use DuckDB](https://www.datacamp.com/blog/an-introduction-to-duckdb-what-is-it-and-why-should-you-use-it)*