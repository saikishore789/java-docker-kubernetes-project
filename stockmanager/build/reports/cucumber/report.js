$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Stocks.feature");
formatter.feature({
  "line": 1,
  "name": "Retrieving Stocks",
  "description": "",
  "id": "retrieving-stocks",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Should be able to get a list of all stocks",
  "description": "",
  "id": "retrieving-stocks;should-be-able-to-get-a-list-of-all-stocks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the application has been initialised with test data",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the client gets all stocks",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a list of 5 stocks will be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "RestStepDefs.init()"
});
formatter.result({
  "duration": 420640524,
  "error_message": "java.lang.ExceptionInInitializerError\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:43)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:183)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)\n\tat java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1845)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:150)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:173)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:596)\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:82)\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:73)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:150)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:124)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n\tat ✽.Given the application has been initialised with test data(features/Stocks.feature:4)\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @3701eaf6\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:43)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:183)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)\n\tat java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1845)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:150)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:173)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:596)\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:82)\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:73)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:150)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:124)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.match({
  "location": "RestStepDefs.getAllStocks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "RestStepDefs.assertListOfStocksLength(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "Should be able to get the correct SKU for the first stock",
  "description": "",
  "id": "retrieving-stocks;should-be-able-to-get-the-correct-sku-for-the-first-stock",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "the application has been initialised with test data",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the client gets all stocks",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the stock at index 0 will have the sku 12345678",
  "keyword": "Then "
});
formatter.match({
  "location": "RestStepDefs.init()"
});
formatter.result({
  "duration": 1052165,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:43)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:183)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)\n\tat java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1845)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:150)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:173)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:596)\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:82)\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:73)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:150)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:124)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n\tat ✽.Given the application has been initialised with test data(features/Stocks.feature:9)\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @3701eaf6 [in thread \"main\"]\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:43)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:183)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)\n\tat java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1845)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:150)\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:173)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:596)\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:82)\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:73)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:150)\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:124)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.match({
  "location": "RestStepDefs.getAllStocks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 19
    },
    {
      "val": "12345678",
      "offset": 39
    }
  ],
  "location": "RestStepDefs.assertStockHasSku(int,String)"
});
formatter.result({
  "status": "skipped"
});
});