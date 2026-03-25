import React from 'react';

function Cancel() {
  return (
  <>  
  <div className='bg-white w-full h-screen flex flex-col items-center justify-center'>

<div className="flex flex-col items-center justify-center">
      <h2> Payment failed</h2>
      <h3>Please try again....</h3>
</div>

<div className="w-full h-full flex items-center justify-center p-4">
  <p className="text-lg text-gray-600">Your payment was unsuccessful. Please try again.</p>
</div>
</div>
  </>
  );
}

export default Cancel;



