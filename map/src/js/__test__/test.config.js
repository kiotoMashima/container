import ErrorRepository from "../app";
describe('ErrorRepository', () => {
    let errorRepo;
    
    beforeEach(() => {
        errorRepo = new ErrorRepository();
        errorRepo.addError(404, 'Not Found');
        errorRepo.addError(500, 'Internal Server Error');
    });
    
    test('should return the correct error description for a known error code', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });
    
    test('should return "Unknown error" for an unknown error code', () => {
        expect(errorRepo.translate(123)).toBe('Unknown error');
    });
    });