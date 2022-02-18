function readmeGenerator(response) {
    var content = `# ${response.title}
##### Contact Me : [Github](https://www.${response.GitHub}) [Email Me](mailto:${response.email)
#### ReadMeGenerator© 2022 All Rights Reserved.  ${response.license}
    
## Table of Contents
* [Repository Description](#Repository-Description)
* [User Story](#User-Story)
* [Installation Instructions](#Instalation-Instructions)
* [Usage Information](#Usage-Information)
* [Contribution Guidelines](#Contribution-Guidelines)
* [Test Instruction](#Test-Instructions)
* [Screenshots](#ScreenShots)
* [License](#License) 

    
# Repository Description
###### [Back to Table of Contents](#Table-of-Contents)
${response.description}
    

    
# User Story
###### [Back to Table of Contents](#Table-of-Contents)
AS a developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


# Instalation Instructions
###### [Back to Table of Contents](#Table-of-Contents)
${response.install}

# Usage Information
###### [Back to Table of Contents](#Table-of-Contents)
${response.Usage}

  
# Contribution Guidelines
###### [Back to Table of Contents](#Table-of-Contents)
${response.contribute}
    
    
# Test Instructions
###### [Back to Table of Contents](#Table-of-Contents)
${response.test}
    
    
# Screenshots 
###### [Back to Table of Contents](#Table-of-Contents)
#### Demo  ![screenshot](${response.screenshotjs})
    
    

    
# License


${response.license}  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
    
   
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

![JCLOS305](https://img.shields.io/badge/Orchestrated%20by-JCLOS305-blue)
![UOM](https://img.shields.io/badge/University%20of-Miami-orange)

`
return content;
};

module.exports = readmeGenerator;