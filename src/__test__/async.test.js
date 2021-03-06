import { getDataFromApi } from '../promises';

describe('Tets of promises', () => {
  it('Teste whit async await', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const get = 'https://rickandmortyapi.com/api/character/1';
    await getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
    });

    await getDataFromApi(get).then(data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });
});


describe('Testing using promises with async/await', () => {
	test('Calling an API', async () => {
		const { results } = await getDataFromApi('https://rickandmortyapi.com/api/character/')
		expect(results.length).toBeGreaterThan(0);
		
		const { name } = await getDataFromApi('https://rickandmortyapi.com/api/character/1')
    expect(name).toEqual('Rick Sanchez');
  });

  it('Tets error 404', async () => {
    const apiError = 'http://httpstat.us/404';
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  });

  it('Tets created 201', async () => {
    const apiError = 'http://httpstat.us/201';
    const peticion = getDataFromApi(apiError);
    await expect(peticion).resolves.toEqual({"code": 201, "description": "Created"});
  });

  it('Tets Resolve and Rejects', async () => {
    await expect(Promise.resolve('Hello')).resolves.toBe('Hello');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });
})