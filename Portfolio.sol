// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.23;

contract Portfolio {
    address public manager;

    struct Project {
        uint id;
        string name;
        string description;
        string projImg; // Changed to camel case for consistency
        string link;
    }

    Project[] private projects; // Changed to private for gas efficiency
    uint public projectCount;

    struct Education {
        uint id;
        string typee;
        string title;
        string affiliated; // Corrected spelling
        string year;
        string link;
    }

    Education[] private educations; // Changed to private for gas efficiency
    uint public educationCount;

    string private profileImg;
    string private aboutMe;
    string private descriptionText;

    constructor() {
        manager = msg.sender;
    }

    modifier onlyManager() {
        require(manager == msg.sender, "You are not the manager");
        _;
    }

    // Set education details
    function setEducation(
        string calldata _typee,
        string calldata _title,
        string calldata _affiliated,
        string calldata _year,
        string calldata _link
    ) external onlyManager {
        educations.push(Education(educationCount, _typee, _title, _affiliated, _year, _link));
        educationCount++;
    }

    // Get all education entries
    function getEducation() external view returns (Education[] memory) {
        return educations;
    }

    // Set profile image
    function setProfileImg(string calldata _profileImg) external onlyManager {
        profileImg = _profileImg;
    }

    // Set description
    function setDescription(string calldata _descriptionText) external onlyManager {
        descriptionText = _descriptionText;
    }

    // Set about me
    function setAbout(string calldata _aboutMe) external onlyManager {
        aboutMe = _aboutMe;
    }

    // Get profile image
    function getProfileImg() external view returns (string memory) {
        require(bytes(profileImg).length != 0, "Profile image cannot be empty");
        return profileImg;
    }

    // Get description
    function getDescription() external view returns (string memory) {
        require(bytes(descriptionText).length != 0, "Description cannot be empty");
        return descriptionText;
    }

    // Get about me
    function getAboutMe() external view returns (string memory) {
        require(bytes(aboutMe).length != 0, "About me cannot be empty");
        return aboutMe;
    }

    // Update existing education entry
    function updateEducation(
        uint _educationCount,
        string calldata _typee,
        string calldata _title,
        string calldata _affiliated,
        string calldata _year,
        string calldata _link
    ) external onlyManager {
        require(_educationCount < educationCount, "Invalid education ID");
        educations[_educationCount] = Education(_educationCount, _typee, _title, _affiliated, _year, _link);
    }

    // Insert a new project
    function insertProject(
        string calldata _name,
        string calldata _description,
        string calldata _projImg,
        string calldata _link
    ) external onlyManager {
        projects.push(Project(projectCount, _name, _description, _projImg, _link));
        projectCount++;
    }

    // Update existing project details
    function projectChange(
        uint _projectId,
        string calldata _name,
        string calldata _description,
        string calldata _projImg,
        string calldata _link
    ) external onlyManager {
        require(_projectId < projectCount, "Invalid project ID");
        projects[_projectId] = Project(_projectId, _name, _description, _projImg, _link);
    }

    // Get all projects
    function allProjects() external view returns (Project[] memory) {
        return projects;
    }

    // Allow donations to the manager
    function donate() public payable {
        payable(manager).transfer(msg.value);
    }
}