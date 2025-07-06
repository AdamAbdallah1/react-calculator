function Display({ value }) {
    return (
    <div className="rounded-2xl bg-[#4B0082] text-white p-3 shadow-cyan-200 min-h-[3rem] text-right overflow-x-auto whitespace-nowrap">
      {value || "|"}
    </div>
  );
}

export default Display