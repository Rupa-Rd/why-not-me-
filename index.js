function whyNotMe(option1, option2) {
    const chosen = Math.random() > 0.5 ? option1 : option2;
    const rejected = chosen === option1 ? option2 : option1;
    return `Going with ${chosen}. Who needs ${rejected} anyway? `;
}

module.exports = whyNotMe;