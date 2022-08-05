const data = [
  {
    id: 1,
    title: 'Indian delegates (INR)',
    prices: [
      {
        name: 'Regular Author ',
        price: 10000,
      },
      {
        name: 'Student Author ',
        price: 9000,
      },
      {
        name: 'Industry Professional ',
        price: 11000,
      },
      {
        name: 'Listener (Non-Author/Co-Author/General Participants) ',
        price: 2000,
      },
    ],
  },
  {
    id: 2,
    title: 'International delegates (US $)',
    prices: [
      {
        name: 'Regular Author ',
        price: 350,
      },
      {
        name: 'Students Author ',
        price: 250,
      },
      {
        name: '2nd paper, Author from other countries ',
        price: 210,
      },
      {
        name: 'Listener (Non-Author/Co-Author/General Participants) ',
        price: 150,
      },
    ],
  },
  {
    id: 3,
    title: 'Workshop',
    prices: [
      {
        name: 'Registered Author ',
        price: 'Free',
      },
      {
        name: 'Non-Author/Co-Author/General Participants ',
        price: 1000,
      },
    ],
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
        data: 'ICMLDE CONFERENCE',
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
        data: 'ICMLDE CONFERENCE',
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
        data: 'ICMLDE CONFERENCE',
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
