import { useMemo } from 'react';
import { ExecutiveSummarySchema } from 'openapi';
import { useProjectColor } from './useProjectColor';
import { useTheme } from '@mui/material';
import { GroupedDataByProject } from './useGroupedProjectTrends';

type ProjectFlagTrends = ExecutiveSummarySchema['projectFlagTrends'];

export const useProjectChartData = (
    projectFlagTrends: GroupedDataByProject<ProjectFlagTrends>,
) => {
    const theme = useTheme();
    const getProjectColor = useProjectColor();

    const data = useMemo(() => {
        const datasets = Object.entries(projectFlagTrends).map(
            ([project, trends]) => {
                const color = getProjectColor(project);
                return {
                    label: project,
                    data: trends,
                    borderColor: color,
                    backgroundColor: color,
                    fill: false,
                };
            },
        );

        return { datasets };
    }, [theme, projectFlagTrends]);

    return data;
};