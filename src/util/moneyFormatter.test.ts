import { formatDecimalToDollars } from "./moneyFormatter"

describe('moneyFormatter', () => {
  describe('formatDecimalToDollars', () => {
    it('should format 1000 to $1,000.00', () => {
      expect(formatDecimalToDollars(1000)).toBe("$1,000.00")
    })

    it('should format 0 to $0.00', () => {
      expect(formatDecimalToDollars(0)).toBe("$0.00")
    })

    it('should format 1687172.578175 to $1,687,172.58', () => {
      expect(formatDecimalToDollars(1687172.578175)).toBe("$1,687,172.58")
    })
  })
})
