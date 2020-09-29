describe("Get Recipient", () => {
  it("Will return the first recipient if the position is '1'.", () => {
    expect(
      getRecipient("@User_One @UserABC! Have you seen this from @Userxyz?", 1)
    ).toEqual("User_One");
  });

  it("Will return the second recipient if the position is '2'.", () => {
    expect(
      getRecipient("@User_One @UserABC Have you seen this from @Userxyz?", 2)
    ).toEqual("UserABC");
  });

  it("Will return the third recipient if the position is '3'.", () => {
    expect(
      getRecipient("@User_One @UserABC! Have you seen this from @Userxyz?", 3)
    ).toEqual("Userxyz");
  });

  it("Will return an empty string if the recipient isn't found.", () => {
    expect(
      getRecipient("@User_One @UserABC Have you seen this from @Userxyz?", 4)
    ).toEqual("");
  });
});
