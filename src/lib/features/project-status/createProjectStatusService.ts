import type { Db, IUnleashConfig } from '../../server-impl';
import { ProjectStatusService } from './project-status-service';
import EventStore from '../events/event-store';
import FakeEventStore from '../../../test/fixtures/fake-event-store';
import ProjectStore from '../project/project-store';
import FakeProjectStore from '../../../test/fixtures/fake-project-store';
import FakeApiTokenStore from '../../../test/fixtures/fake-api-token-store';
import { ApiTokenStore } from '../../db/api-token-store';
import SegmentStore from '../segment/segment-store';
import FakeSegmentStore from '../../../test/fixtures/fake-segment-store';
import { PersonalDashboardReadModel } from '../personal-dashboard/personal-dashboard-read-model';
import { FakePersonalDashboardReadModel } from '../personal-dashboard/fake-personal-dashboard-read-model';
import {
    createFakeProjectLifecycleSummaryReadModel,
    createProjectLifecycleSummaryReadModel,
} from './project-lifecycle-read-model/createProjectLifecycleSummaryReadModel';

export const createProjectStatusService = (
    db: Db,
    config: IUnleashConfig,
): ProjectStatusService => {
    const eventStore = new EventStore(db, config.getLogger);
    const projectStore = new ProjectStore(
        db,
        config.eventBus,
        config.getLogger,
        config.flagResolver,
    );
    const apiTokenStore = new ApiTokenStore(
        db,
        config.eventBus,
        config.getLogger,
        config.flagResolver,
    );
    const segmentStore = new SegmentStore(
        db,
        config.eventBus,
        config.getLogger,
        config.flagResolver,
    );
    const projectLifecycleSummaryReadModel =
        createProjectLifecycleSummaryReadModel(db, config);

    return new ProjectStatusService(
        {
            eventStore,
            projectStore,
            apiTokenStore,
            segmentStore,
        },
        new PersonalDashboardReadModel(db),
        projectLifecycleSummaryReadModel,
    );
};

export const createFakeProjectStatusService = () => {
    const eventStore = new FakeEventStore();
    const projectStore = new FakeProjectStore();
    const apiTokenStore = new FakeApiTokenStore();
    const segmentStore = new FakeSegmentStore();
    const projectStatusService = new ProjectStatusService(
        {
            eventStore,
            projectStore,
            apiTokenStore,
            segmentStore,
        },
        new FakePersonalDashboardReadModel(),
        createFakeProjectLifecycleSummaryReadModel(),
    );

    return {
        projectStatusService,
    };
};
