

(async () => {
  try {
    // 1. Login as admin
    const loginRes = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@ecocycle.com', password: 'adminpassword', type: 'admin' })
    });
    const loginData = await loginRes.json();
    console.log('Login:', loginData);

    if (!loginData.token) return;

    // 2. Fetch unverified agencies
    const unverifiedRes = await fetch('http://localhost:5000/api/admin/agencies/unverified', {
      headers: { 'Authorization': `Bearer ${loginData.token}` }
    });
    const unverifiedData = await unverifiedRes.json();
    console.log('Unverified:', unverifiedData);

    if (unverifiedData.length === 0) return;

    // 3. Verify the first one
    const verifyRes = await fetch(`http://localhost:5000/api/admin/agencies/${unverifiedData[0]._id}/verify`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${loginData.token}` }
    });
    const verifyData = await verifyRes.text();
    console.log('Verify Response:', verifyData);

  } catch (err) {
    console.error(err);
  }
})();
