async function getData(json) {
	const response = await fetch(`http://sneakers-api/get/${json}`);
	return response.json();
}

async function postData(json, data) {
	const response = await fetch(`http://sneakers-api/post/${json}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return response.json();
}

async function replaceData(json, data) {
	const response = await fetch(`http://sneakers-api/replace/${json}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return response.json();
}

async function deleteData(json, id) {
	const response = await fetch(`http://sneakers-api/delete/${json}/${id}`, {
		method: 'DELETE'
	});
	return response.json();
}

export { getData, postData, deleteData, replaceData }
