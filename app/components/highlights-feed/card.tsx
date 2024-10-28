const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-2.5 rounded-xl border border-solid border-gray-200 bg-white p-2.5 shadow">
      {children}
    </div>
  );
};

export default Card;
