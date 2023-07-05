import { describe, expect, it } from "vitest";
import { lang } from "./en";

describe('parameterized constants', () => {
  it('should return the subheading', () => {
    expect(lang.search.subHeading('best offers','AMS', 'DEL'), 'Currently showing best offers from AMS to DEL')
  })
  it('should return the journey heading', () => {
    expect(lang.journey.heading('1234'), 'Start your booking journey for 1234')
  })
})