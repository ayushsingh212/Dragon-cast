import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [fD, setFD] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    id: '',
  });
  const [subm, setSubm] = useState(false);
  const [savSubm, setSavSubm] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  


  useEffect(() => {
    const savD = localStorage.getItem('contSUb');

    if (savD) setSavSubm(JSON.parse(savD));
  
  }, []);



  const hChan = (e) => {
    const { name, value } = e.target;
    setFD({ ...fD, [name]: value });
  };

  const handSubm = (e) => {
    e.preventDefault();
    const newSubmission = {
      ...fD,
      date: new Date().toISOString(),
      id: isEdit ? fD.id : Date.now().toString(),
    };

    let updatedSubmissions;
    if (isEdit) {
      updatedSubmissions = savSubm.map((sub) =>
        sub.id === fD.id ? newSubmission : sub
      );
    } else {
      updatedSubmissions = [...savSubm, newSubmission];
    }

    localStorage.setItem('contSUb', JSON.stringify(updatedSubmissions));
    setSavSubm(updatedSubmissions);
    setSubm(true);
    resetForm();
    setTimeout(() => setSubm(false), 3000);
  };

  const handleEdit = (submission) => {
    setFD({ ...submission });
    setIsEdit(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    const updatedSubmissions = savSubm.filter((sub) => sub.id !== id);
    localStorage.setItem('contSUb', JSON.stringify(updatedSubmissions));
    setSavSubm(updatedSubmissions);
  };

  const resetForm = () => {
    setFD({ name: '', email: '', subject: '', message: '', id: '' });
    setIsEdit(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 text-white bg-[url('./src/assets/ayushdev.png')] bg-cover bg-center `}>
      <div className="max-w-md mx-auto p-8">
    
       

        <div className={`rounded-xl shadow-md overflow-hidden p-8 `}>
          <h1 className="text-3xl font-bold text-center mb-6">Contact the Developer</h1>
          
          {subm && (
            <div className={`p-3 mb-6 rounded `}>
              {isEdit ? 'Submission updated!' : 'Thank you! Message saved.'}
            </div>
          )}

          <form onSubmit={handSubm} className="space-y-6">
         
            {['name', 'email', 'subject'].map((wfD) => (
              <div key={wfD}>
                <label htmlFor={wfD} className={`block text-sm font-medium $`}>
                  {wfD.charAt(0).toUpperCase() + wfD.slice(1)} 
                </label>
                <input
                placeholder='Enter the required values...'
                  type={wfD === 'email' ? 'email' : 'text'}
                  id={wfD}
                  name={wfD}
                  value={fD[wfD]}
                  onChange={hChan}
                  required
                  className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 '}`}
                />
              </div>
            ))}
           
            <div>
              <label htmlFor="message" className={`block text-sm font-medium`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={fD.message}
                onChange={hChan}
                required
                className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
              >
                {isEdit ? 'Update' : 'Send'}
              </button>
              {isEdit && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>


          {savSubm.length > 0 && (
            <div className="mt-8">
              <h2 className={`text-xl font-semibold mb-4`}>
                Your Submissions
              </h2>
              <ul className="space-y-3">
                {savSubm.map((submission) => (
                  <li
                    key={submission.id}
                    className={`p-4 rounded-lg `}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`font-medium `}>
                          {submission.subject}
                        </p>
                        <p className={`text-sm `}>
                          {new Date(submission.date).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(submission)}
                          className="text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="text-sm text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={`mt-8 text-center text-sm `}>
            <p>Your Data is being Stored...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;