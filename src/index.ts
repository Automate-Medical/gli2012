import { fvcLookups } from './lookups/fvc';
import { fev1fvcLookups } from './lookups/fev1fvc';
import { fev1Lookups } from './lookups/fev1';

import { sex, ethnicity, IGLICoefficientsBySex, GLIFunction, IGLIFunction } from './util';

const fvcCoefficients: IGLICoefficientsBySex = {
  male: {
    q0: 0.9481,
    q1: 0,
    a0: -11.2281,
    a1: 2.4135,
    a2: 0.0865,
    a3: -0.1684,
    a4: -0.0405,
    a5: -0.1177,
    a6: -0.0825,
    p0: -2.2963,
    p1: 0.0718,
    p2: 0.0794,
    p3: -0.4600,
    p4: 0.0325,
    p5: -0.0503
  },
  female: {
    q0: 0.8236,
    q1: 0,
    a0: -10.4030,
    a1: 2.2633,
    a2: 0.0234,
    a3: -0.1555,
    a4: -0.0262,
    a5: -0.1516,
    a6: -0.0833,
    p0: -2.3549,
    p1: 0.1017,
    p2: 0.0810,
    p3: -0.1809,
    p4: 0.0459,
    p5: -0.0503
  }
}

export const fvc: IGLIFunction = function({ age, sex, height, ethnicity, measured }) {
  return GLIFunction(fvcCoefficients, fvcLookups, age, sex, height, ethnicity, measured);
}

const fev1fvcCoefficients: IGLICoefficientsBySex = {
  male: {
    q0: 4.7101,
    q1: -0.6774,
    a0: 0.7403,
    a1: -0.1595,
    a2: -0.0366,
    a3: 0.0079,
    a4: 0.0055,
    a5: 0.0283,
    a6: 0.0106,
    p0: -2.9595,
    p1: 0.1156,
    p2: -0.0381,
    p3: -0.2227,
    p4: -0.1414,
    p5: -0.086
  },
  female: {
    q0: 7.032,
    q1: -1.197,
    a0: 0.550559,
    a1: -0.107805,
    a2: -0.054419,
    a3: 0.005486,
    a4: 0.00882,
    a5: 0.028543,
    a6: 0.0106,
    p0: -3.23948,
    p1: 0.18503,
    p2: -0.03072,
    p3: -0.16403,
    p4: -0.15209,
    p5: -0.086
  }
}

export const fev1fvc: IGLIFunction = function({ age, sex, height, ethnicity, measured }) {
  return GLIFunction(fev1fvcCoefficients, fev1fvcLookups, age, sex, height, ethnicity, measured);
}

const fev1Coefficients: IGLICoefficientsBySex = {
  male: {
    q0: 0.886600,
    q1: 0.085000,
    a0: -10.3420,
    a1: 2.2196,
    a2: 0.0574,
    a3: -0.1589,
    a4: -0.0351,
    a5: -0.0881,
    a6: -0.0708,
    p0: -2.3268,
    p1: 0.0798,
    p2: 0.1096,
    p3: -0.3973,
    p4: 0.0327,
    p5: 0.0114
  },
  female: {
    q0: 1.1540,
    q1: 0,
    a0: -9.6987,
    a1: 2.1211,
    a2: -0.0270,
    a3: -0.1484,
    a4: -0.0149,
    a5: -0.1208,
    a6: -0.0708,
    p0: -2.3765,
    p1: 0.0972,
    p2: 0.1016,
    p3: -0.0109,
    p4: 0.0733,
    p5: 0.0114
  }
}

export const fev1: IGLIFunction = function({ age, sex, height, ethnicity, measured }) {
  return GLIFunction(fev1Coefficients, fev1Lookups, age, sex, height, ethnicity, measured);
}