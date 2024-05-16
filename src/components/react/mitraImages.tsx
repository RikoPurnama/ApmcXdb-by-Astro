const Mitralmages = (item: {id: number, title: string, image: string}) => {
  return (
    <div key={item.id} className="w-full max-w-xl">
      <img src={item.image} alt={item.title} className="w-full h-auto rounded-xl shadow-md" />
    </div>
  );
};

export default Mitralmages;
