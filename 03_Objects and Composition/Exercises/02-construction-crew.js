function solve(workerObj){
    if(workerObj.dizziness){
        workerObj.levelOfHydrated += 0.1 * workerObj.weight * workerObj.experience;
        workerObj.dizziness = false;
    }

    return workerObj;
}

solve({ weight: 80, 
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true });