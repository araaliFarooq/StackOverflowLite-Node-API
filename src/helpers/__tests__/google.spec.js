import UserHelper from "../user-helper";
import GoogleAuthentication from "../google-helper";

const mockGoogleProfile = {
    emails: [{ value: "test@gmail.com" }],
    image: { url: "url" },
    name: { familyName: "familyName", givenName: "lastName" },
    displayName: "displayName",
};
describe("GoogleAuthentication", () => {
    it("should getGoogleProfile", async () => {
        jest.spyOn(UserHelper, "getSocialUserProfile").mockResolvedValue(mockGoogleProfile);
        const profile = await GoogleAuthentication.getGoogleProfile("accessToken");
        expect(UserHelper.getSocialUserProfile).toHaveBeenCalled();
        expect(profile).toEqual(mockGoogleProfile);
    });

    it("should extractUserProfile", () => {
        const result = GoogleAuthentication.extractUserProfile(mockGoogleProfile);
        expect(result).toEqual({
            image: mockGoogleProfile.image.url,
            familyName: mockGoogleProfile.name.familyName,
            givenName: mockGoogleProfile.name.givenName,
            displayName: mockGoogleProfile.displayName,
            email: mockGoogleProfile.emails[0].value,
        });
    });
});
