# GLI2012

A TypeScript implementation of Global Lung Function Initiative's multi-ethnic reference values for spirometry for the 3–95-yr age range

## Background

> Spirometry (meaning the measuring of breath) is the most common of the pulmonary function tests (PFTs). It measures lung function, specifically the amount (volume) and/or speed (flow) of air that can be inhaled and exhaled. Spirometry is helpful in assessing breathing patterns that identify conditions such as asthma, pulmonary fibrosis, cystic fibrosis, and COPD. It is also helpful as part of a system of health surveillance, in which breathing patterns are measured over time.

This module implements the reference value equations specified in [Multi-ethnic reference values for spirometry for the 3–95-yr age range: the global lung function 2012 equations](https://www.ers-education.org/lr/show-media/?id=265530).

## Installation

`npm install @automate-medical/gli2012`

Please note: 

* `@automate-medical/gli2012` is packaged as a **native ES module** only. Your runtime must support native modules (i.e. Node >= 13). 
* `@automate-medical/gli2012` is written in **TypeScript**, declarations are packaged with the build.

## Usage

This module exports three functions `fvc`, `fev1`, and `fev1fvc`. They each return the expected measurement (M), the percentage of actual vs expected, the upper limit of normal, the lower limit of normal, and a Z-score corresponding to the actual's performance.

Please see the TypeScript annotations for a full list of function arguments and the return values.

An example to display the Zscore from a measured FEV1 of a 30 year old caucasian male measuring 165cm:

```
import { fev1 } from '@automate-medical/gli2012';

const result = fev1({ age: 30, sex: "Male", height: 165, ethnicity: "Caucasian", measured: 3.1 });
console.log(result.zscore);
```

Note that this implementation exactly implements the ethnicity parameter as described the GLI working group.

## Notice

This repository is provided for educational purposes only, it has not been reviewed and cannot be used in a clinical practice. The software is provided "as is", without any express or implied warranty, and no implication of fitness for a particular use.
