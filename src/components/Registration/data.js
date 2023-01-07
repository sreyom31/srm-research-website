const data = [
  {
    id: 1,
    title: 'Indian Industry delegates (INR)',
    price: '5000',
  },
  {
    id: 2,
    title: 'Indian Academic delegates (INR)',
    price: '3500',
  },
  {
    id: 3,
    title: 'Foreign authors (USD)',
    price: '100',
  },
];

const transfer = [
  {
    id: 1,
    title: 'Online Transfer for authors from India',
    details: [
      {
        id: 1,
        name: 'Name of Beneficiary',
        data: 'ICIOT 2023 CONFERENCE',
      },
      {
        id: 2,
        name: 'Name of the Bank',
        data: 'YES Bank',
      },
      {
        id: 3,
        name: 'Branch Name',
        data: 'YES Bank -Rajpur Road Dehradun',
      },
      {
        id: 4,
        name: 'Complete Postal Address',
        data: 'Ground Floor, 56, Rajpur Road, Dehradun, Uttarakhand -248001',
      },
      {
        id: 5,
        name: 'Account No. of Beneficiary',
        data: '95958777777835',
      },
      {
        id: 6,
        name: 'IFSC Code',
        data: 'YESB0000115',
      },
      {
        id: 7,
        name: 'Name of Beneficiary',
        data: 'ICIOT 2023 CONFERENCE',
      },
      { id: 8, name: 'Type of Account', data: 'Savings' },
    ],
  },
  {
    id: 2,
    title: 'Wire Transfer from outside India (For Foreign Authors Only)',
    details: [
      {
        id: 1,
        name: 'Name of Beneficiary',
        data: 'University of Petroleum and Energy Studies',
      },
      {
        id: 2,
        name: 'Purpose',
        data: 'ICIOT 2023 CONFERENCE',
      },
      {
        id: 3,
        name: 'Name of the Bank',
        data: 'YES Bank',
      },
      {
        id: 4,
        name: 'Account No. of Beneficiary',
        data: '011594600000224',
      },
      {
        id: 5,
        name: 'Branch Code',
        data: '115',
      },
      {
        id: 6,
        name: 'Branch IFSC Code',
        data: 'YESB0000115',
      },
      {
        id: 7,
        name: 'Swift Code',
        data: 'YESBINBB',
      },
      { id: 8, name: 'Type of Account', data: 'Savings' },
    ],
  },
];

export { data, transfer };
