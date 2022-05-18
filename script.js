// Labeling each variable
const conceptNameDisplay = document.getElementById('conceptNameDisplay');
const conceptInfoDisplay = document.getElementById('conceptInfoDisplay');

// Selecting all images
const iconContainer = document.querySelector('.icon-container');

const icons = document.querySelectorAll('.icon > img');



// function for when images are clicked, applicable to all images
iconContainer.addEventListener("mouseover", (e) => {
    // Selects the closes ancestor of icon, in this case it is img
    const img = e.target.closest(".icon > a> img");
    if (!img) return;

    conceptNameDisplay.innerHTML = img.alt;
    displayInfo(img.id);
});


// function to display respective information for each icon
function displayInfo(id) {
    const selectedIcon = [...icons].find((icon) => icon.id === id);

    // Each icon
    if (id === 'whatIsSociologyIcon') {
        conceptInfoDisplay.innerHTML = "Sociology is the study of human social relationships and institutions. Sociology’s subject matter is diverse, ranging from crime to religion, from the family to the state, from the divisions of race and social class to the shared beliefs of a common culture, and from social stability to radical change in whole societies.";
    } else if (id === "socioTheoriesIcon") {
        conceptInfoDisplay.innerHTML =
          "A sociological theory is a supposition that intends to consider, analyze, and/or explain objects of social reality from a sociological perspective, drawing connections between individual concepts in order to organize and substantiate sociological knowledge.";

    } else if (id === "interactionistIcon") {
        conceptInfoDisplay.innerHTML = "Interactionism is a theoretical perspective in sociology that focuses on the everyday interactions between individuals as the basis for the development of society. Interactionism focuses on humans as social actors rather than just focusing on the role of society.";
      } else if (id === 'conflictIcon') {
          conceptInfoDisplay.innerHTML = 'A perspective in the social sciences that emphasizes the social, political or material inequality of a social group; critiques the broad socio-political system; or otherwise detracts from structural functionalism and ideological conservativism.';
      } else if (id === 'functionalistIcon') {
        conceptInfoDisplay.innerHTML = 'A theory that views society as a complex but orderly and stable system with interconnected structures and functions or social patterns that operate to meet the needs of individuals in a society.';
        } else if (id === 'socialization') {
        conceptInfoDisplay.innerHTML = 'Socialization is the process whereby an individual’s standards, skills, motives, attitudes, and behaviors change to conform to those regarded as desirable and appropriate for his or her present and future role in any particular society.';
    } else if (id === 'formsSocializationIcon') {
        conceptInfoDisplay.innerHTML = 'Generally, there are five types of socialization: primary, secondary, developmental, anticipatory and resocialization. This type of socialization happens when a child learns the values, norms and behaviors that should be displayed in order to live accordingly to a specific culture.';
    } else if (id === 'exchangeIcon') {
        conceptInfoDisplay.innerHTML = 'Social exchange theory proposes that social behavior is the result of an exchange process. The purpose of this exchange is to maximize benefits and minimize costs. According to this theory, people weigh the potential benefits and risks of social relationships. When the risks outweigh the rewards, people will terminate or abandon the relationship.';
    } else if (id === 'learningIcon') {
        conceptInfoDisplay.innerHTML = 'Social learning theory, proposed by Albert Bandura, emphasizes the importance of observing, modelling, and imitating the behaviors, attitudes, and emotional reactions of others. Social learning theory considers how both environmental and cognitive factors interact to influence human learning and behavior.';
    } else if (id === 'labelingIcon') {
        conceptInfoDisplay.innerHTML = 'Labeling theory is an approach in the sociology of deviance that focuses on the ways in which the agents of social control attach stigmatizing stereotypes to particular groups, and the ways in which the stigmatized change their behavior once labeled.';
    } else if (id === 'feminismIcon') {
        conceptInfoDisplay.innerHTML = 'Feminist sociology is an interdisciplinary exploration of gender and power throughout society. Here, it uses conflict theory and theoretical perspectives to observe gender in its relation to power, both at the level of face-to-face interaction and reflexivity within social structures at large.';
    } else if (id === 'criticalIcon') {
        conceptInfoDisplay.innerHTML = 'Critical Theory is a social theory that aims to critique and change society as a whole. Critical theories attempt to find the underlying assumptions in social life that keep people from fully and truly understanding how the world works.';
    } else if (id === 'strainIcon') {
        conceptInfoDisplay.innerHTML = "According to Merton's strain theory, societal structures can pressure individuals into committing crimes. Classic Strain Theory predicts that deviance is likely to happen when there is a misalignment between the “cultural goals” of a society (such as monetary wealth) and the opportunities people have to obtain them.";
    } else if (id === 'rationalIcon') {
        conceptInfoDisplay.innerHTML = "Rational choice theory states that individuals use rational calculations to make rational choices and achieve outcomes that are aligned with their own personal objectives. These results are also associated with maximizing an individual's self-interest.";
    } else if (id === 'gameIcon') {
        conceptInfoDisplay.innerHTML = 'Game theory is a theoretical framework for conceiving social situations among competing players. In some respects, game theory is the science of strategy, or at least the optimal decision-making of independent and competing actors in a strategic setting.';
    } else if (id === 'sociobiologyIcon') {
        conceptInfoDisplay.innerHTML = 'Sociobiology investigates social behaviors such as mating patterns, territorial fights, pack hunting, and the hive society of social insects. It argues that just as selection pressure led to animals evolving useful ways of interacting with the natural environment, so also it led to the genetic evolution of advantageous social behavior.';
    } else if (id === 'chaosIcon') {
        conceptInfoDisplay.innerHTML = 'Chaos theory aims to find the general order of social systems and particularly social systems that are similar to each other. The assumption here is that the unpredictability in a system can be represented as overall behavior, which gives some amount of predictability, even when the system is unstable.';
    } else if (id === 'phenomonologyIcon') {
        conceptInfoDisplay.innerHTML = 'Social phenomenology is an approach within the field of sociology that aims to reveal what role human awareness plays in the production of social action, social situations and social worlds. In essence, phenomenology is the belief that society is a human construction.';
    } else if (id === 'disengagementIcon') {
        conceptInfoDisplay.innerHTML = 'The disengagement theory of ageing states that "aging is an inevitable, mutual withdrawal or disengagement, resulting in decreased interaction between the aging person and others in the social system he belongs to". The theory claims that it is natural and acceptable for older adults to withdraw from society.';
    } else if (id === 'macroIcon') {
        conceptInfoDisplay.innerHTML = 'Macro theories are large scale theories – what postmodernists call grand narratives – about society. They are structural theories such as functionalism and Marxism. They contrast with micro theories (action theories).';
    } else if (id === 'comteIcon') {
        conceptInfoDisplay.innerHTML = 'Auguste Comte was one of the founders of sociology and coined the term sociology. Comte believed sociology could unite all sciences and improve society. Comte was a positivist who argued that sociology must have a scientific base and be objective. Comte theorized a three-stage development of society.';
    } else if (id === 'marxIcon') {
        conceptInfoDisplay.innerHTML = "Marx's theories formed a sociological perspective called conflict theory, which stated that capitalist societies were built on conflicts between the workers and the rulers. In this theory, society relies on class conflict in order to keep the wealthy in power and the poor as subjects to the government.";
    } else if (id === 'durkheimIcon') {
        conceptInfoDisplay.innerHTML = 'Durkheim is often considered a conservative within the field of sociology, being concerned primarily with order, consensus, solidarity, social morality, and systems of religion. His theoretical analysis helped provide a basis for relatively conservative structural functional models of society.';
    } else if (id === 'weberIcon') {
        conceptInfoDisplay.innerHTML = 'The German philosopher and sociologist Max Weber is one of the founding fathers of sociology. He is regarded as the proponent of anti-positivism thought and argued that society can be understood by studying social actions through interpretive meaning the actors (individual) attach to their own actions.';
    } else if (id === 'spencerIcon') {
        conceptInfoDisplay.innerHTML = 'Spencer believed that the fundamental sociological classification was between military societies, in which cooperation was secured by force, and industrial societies, in which cooperation was voluntary and spontaneous.';
    }
};

