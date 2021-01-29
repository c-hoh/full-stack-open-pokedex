Let’s assume a Python application.

Given the language’s popularity there are plenty of tools available helping
in the various steps of development. For linting we can use pylint or flake8, 
for testing pytest is commonly used. Creating an installable package from our 
source can be done with pip and is a straightforward process as there is 
no compiling involved.

As alternatives to Github Actions and Jenkins we could use Gitlab CI, 
Azure DevOps or Drone CI, but generally there seem to be plenty of CI/CD tools 
out there both self-hosted ones as well as cloud services.

Assuming a small-ish team and not too complex requirement for the entire 
CI/CD process, going into the cloud seems worthwhile. With growing needs 
this should be re-assesed from time to time, though. To make the decision 
which type of service to use one should consider cost, the tool’s flexibility 
and also familiarity of developers with the tools.