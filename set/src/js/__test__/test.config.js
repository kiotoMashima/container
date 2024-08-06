import { Character } from "../app";
import { Team } from "../app";
describe('Team', () => {
    let team;
    let char1;
    let char2;
    let char3;
    
    beforeEach(() => {
        team = new Team();
        char1 = new Character('Warrior');
        char2 = new Character('Mage');
        char3 = new Character('Archer');
    });
test('should add a character to the team', () => {
    team.add(char1);
    expect(team.members.has(char1)).toBe(true);
});

test('should throw an error when adding a duplicate character', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Character is already in the team');
});

test('should add multiple characters to the team without duplicates', () => {
    team.addAll(char1, char2, char3, char1);
    expect(team.members.size).toBe(3);
    expect(team.members.has(char1)).toBe(true);
    expect(team.members.has(char2)).toBe(true);
    expect(team.members.has(char3)).toBe(true);
});

test('should convert the team to an array', () => {
    team.addAll(char1, char2, char3);
    const teamArray = team.toArray();
    expect(Array.isArray(teamArray)).toBe(true);
    expect(teamArray).toContain(char1);
    expect(teamArray).toContain(char2);
    expect(teamArray).toContain(char3);
});
