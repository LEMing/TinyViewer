const div = document.createElement("div");
div.innerText = 'Hey, this is renderer domElement'

const mockRenderer = {
    domElement: div,
    setSize: jest.fn(),
    render: jest.fn(),
    toneMappingExposure: 0.85
};

export default mockRenderer;
