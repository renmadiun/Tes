// ============================================================
// DATA KINERJA ULP — UP3 MADIUN
// ============================================================
// CARA UPDATE BULAN BARU:
// 1. Tambahkan nama bulan baru ke array 'bulan_aktual' (mis. "JUL")
// 2. Tambahkan 1 angka NKO baru di akhir array tiap ULP pada 'nko_trend'
// 3. Untuk tiap indikator (non-group), tambahkan 1 angka baru di akhir
//    array tiap ULP pada 'trend' (urutannya harus sejajar dengan bulan_aktual)
// 4. Update 'periode' ke bulan terbaru
// Kode ULP: MDK=Madiun Kota, MGT=Magetan, NGW=Ngawi, MPT=Maospati,
//           CRB=Caruban, DLP=Dolopo, MTN=Mantingan, UP3=Gabungan UP3 Madiun
// ============================================================

const KINERJA_DATA = {
  "periode": "JUN 2026",
  "bulan_aktual": [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN"
  ],
  "ulp": [
    {
      "nama": "MADIUN KOTA",
      "kode": "MDK"
    },
    {
      "nama": "MAGETAN",
      "kode": "MGT"
    },
    {
      "nama": "NGAWI",
      "kode": "NGW"
    },
    {
      "nama": "MAOSPATI",
      "kode": "MPT"
    },
    {
      "nama": "CARUBAN",
      "kode": "CRB"
    },
    {
      "nama": "DOLOPO",
      "kode": "DLP"
    },
    {
      "nama": "MANTINGAN",
      "kode": "MTN"
    }
  ],
  "nko_trend": {
    "MDK": [
      101.14,
      94.33,
      97.15,
      96.81,
      96.02,
      101.03
    ],
    "MGT": [
      92.81,
      90.87,
      98.5,
      98.52,
      98.89,
      101.46
    ],
    "NGW": [
      96.41,
      99.47,
      103.23,
      103.51,
      103.64,
      107.65
    ],
    "MPT": [
      98.52,
      98.54,
      100.29,
      98.54,
      98.19,
      101.5
    ],
    "CRB": [
      99.44,
      98.83,
      99.82,
      96.73,
      101.61,
      104.8
    ],
    "DLP": [
      97.93,
      95.0,
      94.96,
      96.21,
      96.28,
      100.22
    ],
    "MTN": [
      98.64,
      91.43,
      100.31,
      100.66,
      101.89,
      104.95
    ],
    "UP3": [
      99.54,
      98.21,
      99.79,
      99.41,
      101.31,
      102.62
    ]
  },
  "indikator": [
    {
      "no": "1",
      "nama": "Penjualan Tenaga Listrik",
      "bobot": 14.0,
      "group": false,
      "trend": {
        "MDK": [
          1.13829714,
          null,
          null,
          null,
          null,
          70.55
        ],
        "MGT": [
          0.673866177000001,
          null,
          null,
          null,
          null,
          86.15
        ],
        "NGW": [
          0.00132139000000109,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.274353317999999,
          null,
          null,
          null,
          null,
          93.74
        ],
        "CRB": [
          0.699219483,
          null,
          null,
          null,
          null,
          106.11
        ],
        "DLP": [
          0.189812778,
          null,
          null,
          null,
          null,
          85.88
        ],
        "MTN": [
          -0.001230528999999,
          null,
          null,
          null,
          null,
          91.37
        ]
      },
      "capaian": {
        "MDK": 70.55,
        "MGT": 86.15,
        "NGW": 110.0,
        "MPT": 93.74,
        "CRB": 106.11,
        "DLP": 85.88,
        "MTN": 91.37
      }
    },
    {
      "no": "2",
      "nama": "Susut Distribusi Tanpa E-min (sesuai kewenangan)",
      "bobot": 12.0,
      "group": false,
      "trend": {
        "MDK": [
          0.77,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          9.91,
          null,
          null,
          null,
          null,
          96.86
        ],
        "NGW": [
          8.89,
          null,
          null,
          null,
          null,
          105.5
        ],
        "MPT": [
          5.86,
          null,
          null,
          null,
          null,
          103.21
        ],
        "CRB": [
          6.69,
          null,
          null,
          null,
          null,
          94.57
        ],
        "DLP": [
          7.28,
          null,
          null,
          null,
          null,
          100.61
        ],
        "MTN": [
          9.97,
          null,
          null,
          null,
          null,
          108.05
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 96.86,
        "NGW": 105.5,
        "MPT": 103.21,
        "CRB": 94.57,
        "DLP": 100.61,
        "MTN": 108.05
      }
    },
    {
      "no": "3",
      "nama": "Keandalan Sistem",
      "bobot": 14.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. SAIDI (sesuai kewenangan)",
      "bobot": 6.0,
      "group": false,
      "trend": {
        "MDK": [
          1.18278995113143,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          4.38833615877164,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          4.67604935918815,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.605685499137605,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          1.64104196450433,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.955189191987163,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.964681683301861,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. SAIFI (sesuai kewenangan)",
      "bobot": 6.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0221270009601743,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          0.1376078435607,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          0.0883875680912224,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0200875015775525,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          0.0255120175029817,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.01916938419863,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.0196025537271828,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "c. ENS (sesuai kewenangan)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          0.346,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          1.281,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          2.66,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.013,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          0.28,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.114,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.146,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": "4",
      "nama": "Penyelesaian Eksekusi RUPTL dan Investasi",
      "bobot": 10.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Penambahan Aset RUPTL",
      "bobot": 5.0,
      "group": false,
      "trend": {
        "MDK": [
          100.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          100.0,
          null,
          null,
          null,
          null,
          104.75
        ],
        "NGW": [
          100.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          100.0,
          null,
          null,
          null,
          null,
          84.07
        ],
        "CRB": [
          100.0,
          null,
          null,
          null,
          null,
          94.6
        ],
        "DLP": [
          100.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          100.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 104.75,
        "NGW": 110.0,
        "MPT": 84.07,
        "CRB": 94.6,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "- Penambahan JTM",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          94.26
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          32.21
        ],
        "CRB": [
          0.0,
          null,
          null,
          null,
          null,
          63.8
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 94.26,
        "NGW": 110.0,
        "MPT": 32.21,
        "CRB": 63.8,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "- Penambahan JTR",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "- Penambahan Trafo",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. Penambahan Aset Penyelesaian Fisik Investasi",
      "bobot": 5.0,
      "group": false,
      "trend": {
        "MDK": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "NGW": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MPT": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "CRB": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "DLP": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MTN": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 100.0,
        "NGW": 100.0,
        "MPT": 100.0,
        "CRB": 100.0,
        "DLP": 100.0,
        "MTN": 100.0
      }
    },
    {
      "no": "5",
      "nama": "Percepatan Penyambungan Pelanggan",
      "bobot": 10.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a.1. Jumlah Penambahan Pelanggan",
      "bobot": 0.5,
      "group": false,
      "trend": {
        "MDK": [
          349.0,
          null,
          null,
          null,
          null,
          95.98
        ],
        "MGT": [
          408.0,
          null,
          null,
          null,
          null,
          99.3
        ],
        "NGW": [
          579.0,
          null,
          null,
          null,
          null,
          98.53
        ],
        "MPT": [
          305.0,
          null,
          null,
          null,
          null,
          108.15
        ],
        "CRB": [
          347.0,
          null,
          null,
          null,
          null,
          99.84
        ],
        "DLP": [
          275.0,
          null,
          null,
          null,
          null,
          101.94
        ],
        "MTN": [
          188.0,
          null,
          null,
          null,
          null,
          103.54
        ]
      },
      "capaian": {
        "MDK": 95.98,
        "MGT": 99.3,
        "NGW": 98.53,
        "MPT": 108.15,
        "CRB": 99.84,
        "DLP": 101.94,
        "MTN": 103.54
      }
    },
    {
      "no": null,
      "nama": "a.2. Penambahan Daya Tersambung",
      "bobot": 1.5,
      "group": false,
      "trend": {
        "MDK": [
          0.868890000000022,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          1.447889,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          2.07703000000004,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          1.43786,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          1.15535,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.967150000000004,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.505624999999995,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. Pendapatan Biaya Penyambungan",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          1.24641235,
          null,
          null,
          null,
          null,
          87.65
        ],
        "MGT": [
          1.56041065,
          null,
          null,
          null,
          null,
          79.96
        ],
        "NGW": [
          1.9249347,
          null,
          null,
          null,
          null,
          86.81
        ],
        "MPT": [
          0.9373252,
          null,
          null,
          null,
          null,
          86.9
        ],
        "CRB": [
          1.00891755,
          null,
          null,
          null,
          null,
          81.4
        ],
        "DLP": [
          1.0151878,
          null,
          null,
          null,
          null,
          72.31
        ],
        "MTN": [
          0.7877335,
          null,
          null,
          null,
          null,
          71.79
        ]
      },
      "capaian": {
        "MDK": 87.65,
        "MGT": 79.96,
        "NGW": 86.81,
        "MPT": 86.9,
        "CRB": 81.4,
        "DLP": 72.31,
        "MTN": 71.79
      }
    },
    {
      "no": null,
      "nama": "c. Penambahan Jumlah Pelanggan Lisdes",
      "bobot": 4.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          15.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "CRB": [
          10.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 100.0,
        "CRB": 110.0,
        "DLP": 100.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "d. Peningkatan kWh Penjualan dari Pelanggan Lisdes",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          13.4,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "CRB": [
          225.9,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 100.0,
        "CRB": 110.0,
        "DLP": 100.0,
        "MTN": 110.0
      }
    },
    {
      "no": "6",
      "nama": "Peningkatan Pelayanan Pelanggan",
      "bobot": 8.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Feedback Rating Negatif pada PLN Mobile - Gangguan",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "CRB": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 100.0,
        "CRB": 110.0,
        "DLP": 100.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. Response Time atas Gangguan (diluar Clear Tamper)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          23.22,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          17.63,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          22.12,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          17.1,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          19.97,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          20.53,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          22.27,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "c. Success Rate Auto Dispatch Gangguan Individual (diluar Clear Tamper)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          59.2760180995475,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          33.2584269662921,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          28.0321285140562,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          29.7142857142857,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          19.2118226600985,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          19.5275590551181,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          16.6666666666667,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "d.1. Total Kali Transaksi Keuangan di PLN Mobile (seluruh Pelanggan PLN)",
      "bobot": 1.2,
      "group": false,
      "trend": {
        "MDK": [
          9.224,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          6.522,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          11.345,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          3.87,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          5.961,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          5.379,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          3.545,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "d.2. Total Rupiah Transaksi di PLN Mobile",
      "bobot": 0.8,
      "group": false,
      "trend": {
        "MDK": [
          1.557665507,
          null,
          null,
          null,
          null,
          97.31
        ],
        "MGT": [
          0.828242698,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          1.687287277,
          null,
          null,
          null,
          null,
          101.4
        ],
        "MPT": [
          0.52012306,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          0.747089604,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.665705732,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.435343482,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 97.31,
        "MGT": 110.0,
        "NGW": 101.4,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": "7",
      "nama": "Keandalan JTM",
      "bobot": 7.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Gangguan TM (sesuai kewenangan)",
      "bobot": 5.0,
      "group": false,
      "trend": {
        "MDK": [
          10.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          17.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          33.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          4.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          17.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          16.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          13.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. Kerusakan Peralatan Distribusi (sesuai kewenangan)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          1.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "DLP": [
          1.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          1.0,
          null,
          null,
          null,
          null,
          100.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 100.0,
        "DLP": 110.0,
        "MTN": 100.0
      }
    },
    {
      "no": "8",
      "nama": "Emergency Response Time (ERT) Distribusi",
      "bobot": 8.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. MVOD (sesuai kewenangan)",
      "bobot": 6.0,
      "group": false,
      "trend": {
        "MDK": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. MTTR Siaga 1 TM (sesuai kewenangan)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          110.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": "9",
      "nama": "Management Cash In :",
      "bobot": 6.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Pencapaian Saldo Rata-Rata Akhir Bulan diluar Konsumen Instansi (Kementerian & Lembaga)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          4.698164,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          1.649847,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. Pencapaian Pelunasan PRR",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          5.817475,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          1.966282,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          8.348073,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          4.58127,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          2.879314,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          0.961076,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          1.757801,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "c. Usulan Penghapusan PRR",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "NGW": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MPT": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "CRB": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "DLP": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MTN": [
          0.0,
          null,
          null,
          null,
          null,
          100.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 100.0,
        "NGW": 100.0,
        "MPT": 100.0,
        "CRB": 100.0,
        "DLP": 100.0,
        "MTN": 100.0
      }
    },
    {
      "no": "10",
      "nama": "Pengelolaan Transaksi Energi",
      "bobot": 7.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Perolehan kWh P2TL",
      "bobot": 3.0,
      "group": false,
      "trend": {
        "MDK": [
          81226.0,
          null,
          null,
          null,
          null,
          95.43
        ],
        "MGT": [
          63408.0,
          null,
          null,
          null,
          null,
          60.25
        ],
        "NGW": [
          129417.0,
          null,
          null,
          null,
          null,
          109.83
        ],
        "MPT": [
          41495.0,
          null,
          null,
          null,
          null,
          59.41
        ],
        "CRB": [
          36584.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          46295.0,
          null,
          null,
          null,
          null,
          47.3
        ],
        "MTN": [
          61227.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 95.43,
        "MGT": 60.25,
        "NGW": 109.83,
        "MPT": 59.41,
        "CRB": 110.0,
        "DLP": 47.3,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "b. Penyelesaian Ganti Meter",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          185.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MGT": [
          153.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "NGW": [
          372.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MPT": [
          178.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "CRB": [
          130.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "DLP": [
          121.0,
          null,
          null,
          null,
          null,
          110.0
        ],
        "MTN": [
          142.0,
          null,
          null,
          null,
          null,
          110.0
        ]
      },
      "capaian": {
        "MDK": 110.0,
        "MGT": 110.0,
        "NGW": 110.0,
        "MPT": 110.0,
        "CRB": 110.0,
        "DLP": 110.0,
        "MTN": 110.0
      }
    },
    {
      "no": null,
      "nama": "c. Tindak Lanjut LBKB (Laporan Bulanan Kelainan Baca Meter)",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MGT": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "NGW": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MPT": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "CRB": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "DLP": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ],
        "MTN": [
          100.0,
          null,
          null,
          null,
          null,
          100.0
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 100.0,
        "NGW": 100.0,
        "MPT": 100.0,
        "CRB": 100.0,
        "DLP": 100.0,
        "MTN": 100.0
      }
    },
    {
      "no": "11",
      "nama": "Digitalisasi Aplikasi Korporat",
      "bobot": 4.0,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Pengembangan Aset Distribusi",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ],
        "MGT": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ],
        "NGW": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ],
        "MPT": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ],
        "CRB": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ],
        "DLP": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ],
        "MTN": [
          101.67,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "capaian": {
        "MDK": 101.67,
        "MGT": 101.67,
        "NGW": 101.67,
        "MPT": 101.67,
        "CRB": 101.67,
        "DLP": 101.67,
        "MTN": 101.67
      }
    },
    {
      "no": null,
      "nama": "b. Efektivitas Pemeliharaan",
      "bobot": 2.0,
      "group": false,
      "trend": {
        "MDK": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ],
        "MGT": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ],
        "NGW": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ],
        "MPT": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ],
        "CRB": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ],
        "DLP": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ],
        "MTN": [
          100.0,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "capaian": {
        "MDK": 100.0,
        "MGT": 100.0,
        "NGW": 100.0,
        "MPT": 100.0,
        "CRB": 100.0,
        "DLP": 100.0,
        "MTN": 100.0
      }
    },
    {
      "no": "12",
      "nama": "Kepatuhan, Maturity Level dan Tata Kelola Perusahaan",
      "bobot": null,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Implementasi Maturity Level",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "capaian": {
        "MDK": null,
        "MGT": null,
        "NGW": null,
        "MPT": null,
        "CRB": null,
        "DLP": null,
        "MTN": null
      }
    },
    {
      "no": null,
      "nama": "b. Kepatuhan",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "capaian": {
        "MDK": null,
        "MGT": null,
        "NGW": null,
        "MPT": null,
        "CRB": null,
        "DLP": null,
        "MTN": null
      }
    },
    {
      "no": null,
      "nama": "c. Tata Kelola Perusahaan",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "capaian": {
        "MDK": null,
        "MGT": null,
        "NGW": null,
        "MPT": null,
        "CRB": null,
        "DLP": null,
        "MTN": null
      }
    }
  ]
};
