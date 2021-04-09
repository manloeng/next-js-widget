function MinorDataInputComponent({ title, amount, toAge, fromAge, financeIndex, index, handleUpdate }) {
  return (
    <div>
      <label>{title}:</label>
      <input
        type="text"
        name="amount"
        value={amount}
        placeholder={`Enter your annual ${title}...`}
        onChange={(e) => handleUpdate(e, { financeIndex, index })}
        required
      />
      <label>From Age:</label>
      <input
        type="text"
        name="from_age"
        value={fromAge}
        placeholder="Enter age..."
        onChange={(e) => handleUpdate(e, { financeIndex, index })}
        required
      />
      <label>To Age:</label>
      <input
        type="text"
        name="to_age"
        value={toAge}
        placeholder="Enter age..."
        onChange={(e) => handleUpdate(e, { financeIndex, index })}
        required
      />
    </div>
  );
}
export default MinorDataInputComponent;
