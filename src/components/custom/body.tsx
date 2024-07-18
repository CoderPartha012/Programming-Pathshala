import Image from 'next/image';

const Clients = () => {
  const clients = [
    '/cl1.svg',
    '/cl2.svg',
    '/cl3.svg',
    '/cl4.svg',
    '/cl5.svg',
    '/cl6.svg',
    '/cl3.svg'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Clients</h2>
        <p className="text-center text-gray-600 mb-8">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-wrap justify-center items-center space-x-16">
          {clients.map((client, index) => (
            <div key={index} className="p-4">
              <Image src={client} alt={`Client ${index + 1}`} width={100} height={100} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
