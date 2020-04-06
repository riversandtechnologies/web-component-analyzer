import * as tsModule from "typescript";
import { Node, TypeChecker } from "typescript";
import { AnalyzerFlavor, ComponentFeatureCollection } from "./flavors/analyzer-flavor";
import { AnalyzerConfig } from "./types/analyzer-config";

/**
 * This context is used in the entire analyzer.
 * A new instance of this is created whenever the analyzer runs.
 */
export interface AnalyzerVisitContext {
	checker: TypeChecker;
	ts: typeof tsModule;
	config: AnalyzerConfig;
	flavors: AnalyzerFlavor[];
	emitContinue?(): void;
	cache: {
		featureCollection: WeakMap<Node, ComponentFeatureCollection>;
		general: Map<unknown, unknown>;
	};
	skipResolved: boolean;
}
