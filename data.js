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
      "no": 1.0,
      "nama": "Penjualan Tenaga Listrik",
      "bobot": 14,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          70.55
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          86.15
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          93.74
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          106.11
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          85.88
        ],
        "MTN": [
          null,
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
        "NGW": 110,
        "MPT": 93.74,
        "CRB": 106.11,
        "DLP": 85.88,
        "MTN": 91.37
      }
    },
    {
      "no": 2.0,
      "nama": "Susut Distribusi Tanpa E-min (sesuai kewenangan)",
      "bobot": 12,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          96.86
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          105.5
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          103.21
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          94.57
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100.61
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          108.05
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 96.86,
        "NGW": 105.5,
        "MPT": 103.21,
        "CRB": 94.57,
        "DLP": 100.61,
        "MTN": 108.05
      }
    },
    {
      "no": 3.0,
      "nama": "Keandalan Sistem",
      "bobot": 14,
      "group": true
    },
    {
      "no": null,
      "nama": "a. SAIDI (sesuai kewenangan)",
      "bobot": 6,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. SAIFI (sesuai kewenangan)",
      "bobot": 6,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "c. ENS (sesuai kewenangan)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": 4.0,
      "nama": "Penyelesaian Eksekusi RUPTL dan Investasi",
      "bobot": 10,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Penambahan Aset RUPTL",
      "bobot": 5,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          104.75
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          84.07
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          94.6
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 104.75,
        "NGW": 110,
        "MPT": 84.07,
        "CRB": 94.6,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "- Penambahan JTM",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          94.26
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          32.21
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          63.8
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 94.26,
        "NGW": 110,
        "MPT": 32.21,
        "CRB": 63.8,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "- Penambahan JTR",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "- Penambahan Trafo",
      "bobot": null,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. Penambahan Aset Penyelesaian Fisik Investasi",
      "bobot": 5,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          100
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 100,
        "NGW": 100,
        "MPT": 100,
        "CRB": 100,
        "DLP": 100,
        "MTN": 100
      }
    },
    {
      "no": 5.0,
      "nama": "Percepatan Penyambungan Pelanggan",
      "bobot": 10,
      "group": true
    },
    {
      "no": null,
      "nama": "a.1. Jumlah Penambahan Pelanggan",
      "bobot": 0.5,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          95.98
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          99.3
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          98.53
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          108.15
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          99.84
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          101.94
        ],
        "MTN": [
          null,
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
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. Pendapatan Biaya Penyambungan",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          87.65
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          79.96
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          86.81
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          86.9
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          81.4
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          72.31
        ],
        "MTN": [
          null,
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
      "bobot": 4,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 110,
        "NGW": 110,
        "MPT": 100,
        "CRB": 110,
        "DLP": 100,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "d. Peningkatan kWh Penjualan dari Pelanggan Lisdes",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 110,
        "NGW": 110,
        "MPT": 100,
        "CRB": 110,
        "DLP": 100,
        "MTN": 110
      }
    },
    {
      "no": 6.0,
      "nama": "Peningkatan Pelayanan Pelanggan",
      "bobot": 8,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Feedback Rating Negatif pada PLN Mobile - Gangguan",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 110,
        "NGW": 110,
        "MPT": 100,
        "CRB": 110,
        "DLP": 100,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. Response Time atas Gangguan (diluar Clear Tamper)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "c. Success Rate Auto Dispatch Gangguan Individual (diluar Clear Tamper)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "d.1. Total Kali Transaksi Keuangan di PLN Mobile (seluruh Pelanggan PLN)",
      "bobot": 1.2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "d.2. Total Rupiah Transaksi di PLN Mobile",
      "bobot": 0.8,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          97.31
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          101.4
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 97.31,
        "MGT": 110,
        "NGW": 101.4,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": 7.0,
      "nama": "Keandalan JTM",
      "bobot": 7,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Gangguan TM (sesuai kewenangan)",
      "bobot": 5,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. Kerusakan Peralatan Distribusi (sesuai kewenangan)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          100
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 100,
        "DLP": 110,
        "MTN": 100
      }
    },
    {
      "no": 8.0,
      "nama": "Emergency Response Time (ERT) Distribusi",
      "bobot": 8,
      "group": true
    },
    {
      "no": null,
      "nama": "a. MVOD (sesuai kewenangan)",
      "bobot": 6,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. MTTR Siaga 1 TM (sesuai kewenangan)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": 9.0,
      "nama": "Management Cash In :",
      "bobot": 6,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Pencapaian Saldo Rata-Rata Akhir Bulan diluar Konsumen Instansi (Kementerian & Lembaga)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. Pencapaian Pelunasan PRR",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "c. Usulan Penghapusan PRR",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          100
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 100,
        "NGW": 100,
        "MPT": 100,
        "CRB": 100,
        "DLP": 100,
        "MTN": 100
      }
    },
    {
      "no": 10.0,
      "nama": "Pengelolaan Transaksi Energi",
      "bobot": 7,
      "group": true
    },
    {
      "no": null,
      "nama": "a. Perolehan kWh P2TL",
      "bobot": 3,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          95.43
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          60.25
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          109.83
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          59.41
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          47.3
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 95.43,
        "MGT": 60.25,
        "NGW": 109.83,
        "MPT": 59.41,
        "CRB": 110,
        "DLP": 47.3,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "b. Penyelesaian Ganti Meter",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          110
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          110
        ]
      },
      "capaian": {
        "MDK": 110,
        "MGT": 110,
        "NGW": 110,
        "MPT": 110,
        "CRB": 110,
        "DLP": 110,
        "MTN": 110
      }
    },
    {
      "no": null,
      "nama": "c. Tindak Lanjut LBKB (Laporan Bulanan Kelainan Baca Meter)",
      "bobot": 2,
      "group": false,
      "trend": {
        "MDK": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MGT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "NGW": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MPT": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "CRB": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "DLP": [
          null,
          null,
          null,
          null,
          null,
          100
        ],
        "MTN": [
          null,
          null,
          null,
          null,
          null,
          100
        ]
      },
      "capaian": {
        "MDK": 100,
        "MGT": 100,
        "NGW": 100,
        "MPT": 100,
        "CRB": 100,
        "DLP": 100,
        "MTN": 100
      }
    }
  ]
};
