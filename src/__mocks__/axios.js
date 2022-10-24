import mockAxios from 'jest-mock-axios';
export default mockAxios;


afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});