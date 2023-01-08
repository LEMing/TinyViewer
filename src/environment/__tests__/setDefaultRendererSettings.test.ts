import {setDefaultRendererSettings} from '../environment';

describe('Check default renderer setting', () => {
  it('should set specific options to given renderer', () => {
    const div = document.createElement("div");
    div.innerText = 'Hey, this is renderer domElement'
    const mockRenderer = {
      domElement: div,
      setSize: jest.fn(),
      render: jest.fn(),
      setPixelRatio: jest.fn(),
      shadowMap: {
        enabled: false,
        type: undefined,
      },
      outputEncoding: undefined,
      toneMapping: undefined,
      toneMappingExposure: 0,
    };
    // @ts-ignore
    setDefaultRendererSettings(mockRenderer);
    expect(mockRenderer.shadowMap.enabled).toBeTruthy();
    expect(mockRenderer.toneMappingExposure).toEqual(0.85);
  })
})
