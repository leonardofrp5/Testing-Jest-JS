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
		
	})
})