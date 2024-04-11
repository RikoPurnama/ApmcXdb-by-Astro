const Mitralmages = (item: {id: number, title: string, image: string}) => {
  return (
    <div key={item.id} className="w-full max-w-xl">
      <img src={item.image} alt={item.title} className="rounded-xl shadow-lg" />
    </div>
  );
};

export default Mitralmages;
