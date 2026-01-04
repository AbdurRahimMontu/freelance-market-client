const OverviewCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow flex items-center gap-4">
      <div className="p-3 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </h4>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
