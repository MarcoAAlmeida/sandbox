---
layout: 'default'
title: 'Prometheus FastAPI Instrumentator'
navigation.title: 'prometheus-fastapi-instrumentator'
description: 'A Python library that provides instrumentation for FastAPI applications with Prometheus'
tags: 'python,fastAPI,Prometheus,monitoring'
cover: '/img/png-transparent-python-logo-thumbnail.png'
authorship: '20230411 - marcoalmeida.dev.br@gmail.com'
published: true
---

# Prometheus FastAPI Instrumentator

Prometheus FastAPI Instrumentator is a Python library that provides instrumentation for FastAPI applications with Prometheus. It allows you to easily monitor and collect metrics from your FastAPI application, such as HTTP request duration, response size, and status codes.

With Prometheus FastAPI Instrumentator, you can easily expose your application's metrics to Prometheus, and use Grafana or other visualization tools to analyze and visualize your metrics.

To get started with Prometheus FastAPI Instrumentator, you can install it using pip:

```bash
pip install prometheus-fastapi-instrumentator
```

After installing the library, you can instrument your FastAPI application by creating an instance of the `FastAPIInstrumentator` class, and calling its `instrument` method with your FastAPI application:

```python
from fastapi import FastAPI
from prometheus_fastapi_instrumentator import PrometheusFastAPIInstrumentator

app = FastAPI()

# create an instance of the instrumentator
instrumentator = PrometheusFastAPIInstrumentator()

# instrument the FastAPI application
instrumentator.instrument(app)
```

This will automatically collect and expose metrics for your FastAPI application to Prometheus. You can then use Grafana or other tools to visualize your metrics and monitor your application's performance.

To learn more about Prometheus FastAPI Instrumentator, you can check out the library's [GitHub page](https://github.com/trallnag/prometheus-fastapi-instrumentator), or the [official documentation](https://prometheus-fastapi-instrumentator.readthedocs.io/en/latest/).