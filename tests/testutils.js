function isExpected(actual, expected, name="")
{
    if (actual === expected){
        console.debug(`PASS: ${name} .`);
        return true;
    }
    else{
        console.debug(`${name} expected: ${JSON.stringify(expected, null, '\t')} but actual: ${JSON.stringify(actual, null, '\t')}`);
        return false;
    }
}
