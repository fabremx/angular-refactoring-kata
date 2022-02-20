import {
  NEW_PRODUCT,
  ENDED_PRODUCT,
  COMMON_PRODUCT,
  NEW_PRODUCT_ROW,
  ENDED_PRODUCT_ROW,
  COMMON_PRODUCT_ROW,
  renderComponentWith,
  getNumberOfRows,
  isRendered,
  clickOnRemoveButtonOnRow,
  TOTAL_PRICE,
  getBlock,
  AMOUNT_TO_PAY,
} from "../utils/testing";

describe("Cart Page", () => {
  it("should remove the product from table when user click on product's remove icon", async () => {
    // Given
    await renderComponentWith({
      products: [NEW_PRODUCT, COMMON_PRODUCT]
    });

    expect(getNumberOfRows()).toBe(2);
    expect(isRendered({ key: NEW_PRODUCT_ROW, rowNumber: 1 })).toBeTruthy();
    expect(isRendered({ key: COMMON_PRODUCT_ROW, rowNumber: 2 })).toBeTruthy();

    // When Removing COMMON Product
    clickOnRemoveButtonOnRow(2);

    // Then
    expect(getNumberOfRows()).toBe(1)
    expect(isRendered({ key: NEW_PRODUCT_ROW, rowNumber: 1 })).toBeTruthy();
    expect(isRendered({ key: COMMON_PRODUCT_ROW, rowNumber: 2 })).toBeFalsy();

  });

  it("should display correct products table when products are fetched", async () => {
    // When
    await renderComponentWith({
      products: [NEW_PRODUCT, ENDED_PRODUCT, COMMON_PRODUCT]
    });

    // Then
    expect(isRendered({ key: NEW_PRODUCT_ROW, rowNumber: 1 })).toBeTruthy();
    expect(isRendered({ key: ENDED_PRODUCT_ROW, rowNumber: 2 })).toBeTruthy();
    expect(isRendered({ key: COMMON_PRODUCT_ROW, rowNumber: 3 })).toBeTruthy();
  });

  it("should display correct total price when products are fetched", async () => {
    // When
    await renderComponentWith({
      products: [COMMON_PRODUCT, ENDED_PRODUCT]
    });

    // Then
    expect(getBlock(TOTAL_PRICE)?.textContent).toContain("$ 20");
  });

  it("should display correct amount to pay when products are fetched AND user should pay fees", async () => {
    // When
    await renderComponentWith({
      products: [COMMON_PRODUCT, NEW_PRODUCT]
    });
    // Then
    expect(getBlock(AMOUNT_TO_PAY)?.textContent).toContain("$ 23.99");
  });

  it("should display correct amount to pay when products are fetched AND user should NOT pay fees", async () => {
    // When
    await renderComponentWith({
      products: [COMMON_PRODUCT, NEW_PRODUCT],
      shouldPayFees: false,
    });
    // Then
    expect(getBlock(AMOUNT_TO_PAY)?.textContent).toContain("$ 20.00");
  });
});
