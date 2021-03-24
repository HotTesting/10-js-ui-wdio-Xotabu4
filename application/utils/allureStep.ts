import allureReporter from '@wdio/allure-reporter'

// startStep(title) - start with a step
// title (String) - name of the step.
// endStep(status) - end with a step
// status (String, optional) - step status, passed by default. Must be "failed", "passed" or "broken"

export function step(msg: string) {
    return function stepDescriptor(target: any, propertyKey: any, descriptor: any) {
        const method = descriptor.value;
        descriptor.value = function descriptorValue(...args) {
            allureReporter.startStep(msg);
            try {
                let result = method.apply(this, args);
                allureReporter.endStep('passed');
                return result;
            } catch (e) {
                try {
                    browser.takeScreenshot();
                } catch {
                    console.log(`ERROR: Cannot take screenshot for failed step ${msg} `)
                }
                if (e.toString().includes('AssertionError')) {
                    allureReporter.endStep('failed');
                } else {
                    allureReporter.endStep('broken');
                }
                throw e;
            }
        };
        return descriptor;
    };
}
