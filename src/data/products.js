export const categories = [
    {
      id: 'butters',
      name: 'Butters',
      description: 'Our cannabutter is crafted with care to provide a potent and delicious base for your culinary creations. Available in various potencies to suit your needs.',
      products: [
        {
          id: 'cannabutter',
          name: 'Cannabutter',
          size: '8oz',
          image: '/ghee.webp',
          potencies: [
            { mg: 2400, price: '$39.99' },
            { mg: 1200, price: '$29.99' },
            { mg: 600, price: '$19.99' },
          ],
        },
      ],
    },
    {
      id: 'oils',
      name: 'Oils',
      description: 'Discover the perfect blend of taste and potency with our cannabis-infused oils. Choose from olive oil and MCT coconut oil, each available in various potencies.',
      products: [
        {
          id: 'olive-oil',
          name: 'Olive Oil',
          size: '16oz',
          image: '/oliveoil.JPG',
          potencies: [
            { mg: 2400, price: '$49.99' },
            { mg: 1200, price: '$39.99' },
            { mg: 600, price: '$29.99' },
          ],
        },
        {
          id: 'mct-coconut',
          name: 'MCT Coconut Oil',
          size: '16oz',
          image: '/coconut.webp',
          potencies: [
            { mg: 2400, price: '$49.99' },
            { mg: 1200, price: '$39.99' },
            { mg: 600, price: '$29.99' },
          ],
        },
      ],
    },
    {
        id: 'drizzles',
        name: 'Drizzles',
        description: 'Drizzzzzzzzl',
        products: [
            {
                id: 'peanutbutter-drizzle',
                name: 'Peanut Butter Drizzle',
                size: '8oz',
                image: '/drizzle.webp',
                potencies: [
                    {mg: 1000, price: '$20'},
                    {mg: 500, price: '$10'},
                    {mg: 250, price: '$5'},

                ]
            }
        ]
    }
  ];