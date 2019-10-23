import UserHelper from "../user-helper";
import FacebookAuthentication from "../facebook-helper";

const mockProfile = {
    name: "Dee",
    first_name: "Muhwezi",
    email: "Email@test.com",
    picture: { data: { url: "url" } },
    last_name: "Dee",
};
describe("FaceBookAuthentication", () => {
    it("should getFaceBookProfile", async () => {
        jest.spyOn(UserHelper, "getSocialUserProfile").mockResolvedValue(mockProfile);
        const response = await FacebookAuthentication.getFaceBookProfile("accessToken");
        expect(UserHelper.getSocialUserProfile).toHaveBeenCalled();
        expect(response).toEqual(mockProfile);
    });

    it("should serialize profile", () => {
        const response = FacebookAuthentication.serializeProfile(mockProfile);
        expect(response).toEqual({
            name: "Dee",
            firstName: "Muhwezi",
            lastName: "Dee",
            picture: "url",
            email: "Email@test.com",
        });
    });
});
