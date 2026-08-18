/**
 * Registration ID Generator for Creatathon 2026
 * Generates unique, human-friendly registration IDs in format CRT1000, CRT1001, etc.
 */

let currentCounter = 1000;

export function generateRegistrationId(): string {
  const id = `CRT${currentCounter}`;
  currentCounter += 1;
  return id;
}

export function resetRegistrationIdCounter(start: number = 1000): void {
  currentCounter = start;
}
