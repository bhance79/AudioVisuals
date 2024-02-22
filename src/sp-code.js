export function spCode() {
    return `
    let audio = input();
    let pointerDown = input();
  
    setStepSize(.5);
    setMaxIterations(50)
    let s = getSpace();
    let r = getRayDirection();
  
    let scale = input(.50, 0, 5)
    let n = vectorContourNoise(s*scale+time*0.3, .7, 3)*.5+.5;
    n = pow(n, vec3(6))
    //n = nsin(n*9)
    color(n)
  
    setMaxReflections(.03)
    occlusion(-100)
    displace(.1, 0, 1)
    let col = vec3(255, 0, 50);
    color(n)
    reflectiveColor(0.4, 1, 0.9)
    sphere(0.7);
  
    // Use audio input to modulate the expansion effect
    let audioInfluence = pointerDown+audio * 0.005; // Scale audio input to control the intensity of the effect
    expand(n.z * audioInfluence);
  
    reset();
    `;
  }