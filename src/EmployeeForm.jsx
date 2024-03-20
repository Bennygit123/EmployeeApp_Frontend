// EmployeeForm.js
import React from 'react';

function EmployeeForm() {
  return (
    <div>
      <h2>Employee Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Designation:
          <input type="text" name="designation" />
        </label>
        <label>
          Location:
          
          <input type="text" name="location" />
        </label>
        <label>
          Salary:
          <input type="number" name="salary" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
